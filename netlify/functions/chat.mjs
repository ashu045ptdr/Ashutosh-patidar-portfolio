import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are Ashutosh Patidar's portfolio assistant. Answer questions using only the portfolio information below. Be friendly, professional, and concise. Never invent details, results, metrics, dates, responsibilities, or technologies. If something is not listed, say the portfolio does not specify it and offer relevant information that is listed.

PROFILE
- Ashutosh Patidar is a Software Developer with 2+ years of experience.
- He builds scalable web applications and focuses on efficient, secure, high-quality software.
- Contact: ashupatidar1432@gmail.com.

SKILLS
- Backend: Node.js, Express.js, Nest.js, RESTful APIs.
- Frontend: React.js, HTML/CSS, JavaScript, responsive design.
- Databases: MongoDB, MySQL, PostgreSQL, Redis.
- Tools and other technologies: WebSocket, Socket.io, Firebase, Docker, Git.

EXPERIENCE
- Software Developer at Swap Infotech Pvt. Ltd, Indore (Nov 2025–Present): develops backend services with Node.js, Express.js, and Nest.js; designs REST APIs for web and mobile applications; works with MongoDB, MySQL, and PostgreSQL; integrates third-party APIs; improves performance and scalability; collaborates with frontend teams.
- Junior Software Developer at Swapac Infotech Pvt. Ltd, Indore (Aug 2024–Oct 2025): developed Node.js and Express.js backend modules and REST APIs; implemented MongoDB and MySQL operations; helped debug and optimize backend systems and integrate APIs.

PROJECTS
- CopiaCom: Pharmaceutical management system for medicine formulations, specification data, and product approval workflows. Ashutosh built Node.js/Express REST APIs, integrated MongoDB, and implemented authentication, authorization, and role-based access control. Technologies: Node.js, Express.js, MongoDB, React.js.
- Aivis: Pharmaceutical data export and management on a remote system. Work included secure data synchronization and backend modules for medicine, formulation, and product information, with data validation. Technologies: Node.js, Express.js, MongoDB, React.js.
- SaferWatch Developer Portal: Developer portal for a U.S.-based security platform and its security APIs. Work included API key generation, regeneration, and revocation; PostgreSQL storage for developer accounts and API credentials; usage monitoring and rate limiting. Technologies: Node.js, NestJS, PostgreSQL.
- Naufumi: Business listing and management platform with live location and geolocation services. Work included job posting/listing APIs, MongoDB data management, notifications, location services, and media management. Technologies: Node.js, Express.js, MongoDB, Geolocation.
- Labcompute: Pharmaceutical management system for drug formulation records and calculations. Work included backend functionality, MongoDB data management, and role-based access control. Technologies: Node.js, Express.js, MongoDB, React.js.

EDUCATION AND CERTIFICATIONS
- Master of Computer Application, Maharaja Ranjit Singh Group of Institute, Indore (2023).
- BSc (Computer Science), ILVA Commerce and Science College, Indore (2021).
- Higher Secondary Education, Excellence School No 1, Khargone (2018).
- Master Database Management, TCS iON (Beginners).
- MYSQL Basics, Great Learning.

RESPONSE STYLE
- Answer the question directly, using specific portfolio examples when helpful.
- For project questions, summarize what the project does, Ashutosh's listed contribution, and its technologies.
- For skill questions, group related skills and connect them to listed projects only when the portfolio supports that connection.
- Use short paragraphs or • bullets for lists. Do not claim access to source code, live systems, or private project details.
- If asked something unrelated to Ashutosh or the portfolio, briefly say you specialize in questions about his portfolio and invite a relevant question.`;

const jsonResponse = (statusCode, body) => new Response(JSON.stringify(body), {
  status: statusCode,
  headers: { 'Content-Type': 'application/json' },
});

export default async (request) => {
  if (request.method !== 'POST') {
    return jsonResponse(405, { error: 'Use POST to send a chat message.' });
  }

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return jsonResponse(503, { error: 'The AI assistant is not configured. Please set GEMINI_API_KEY in Netlify environment variables.' });
  }

  const bodyText = await request.text();
  if (bodyText.length > 20000) {
    return jsonResponse(413, { error: 'The chat request is too large.' });
  }

  let body;
  try {
    body = JSON.parse(bodyText);
  } catch {
    return jsonResponse(400, { error: 'The chat request must contain valid JSON.' });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse(400, { error: 'The chat request is invalid.' });
  }

  const { message, history = [] } = body;
  if (typeof message !== 'string' || !message.trim() || message.length > 1200) {
    return jsonResponse(400, { error: 'Please send a message under 1,200 characters.' });
  }
  if (!Array.isArray(history) || history.length > 20 || history.some(
    item => !item || typeof item !== 'object'
      || !['user', 'model'].includes(item.role)
      || typeof item.text !== 'string'
      || item.text.length > 2000
  )) {
    return jsonResponse(400, { error: 'The chat history is invalid. Please start a new message.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.6-flash',
      systemInstruction: SYSTEM_PROMPT,
    });
    const chat = model.startChat({
      history: history.map(item => ({
        role: item.role,
        parts: [{ text: item.text }],
      })),
    });
    const result = await chat.sendMessage(message.trim());
    const text = (await result.response).text();
    if (!text.trim()) {
      return jsonResponse(502, { error: 'The AI assistant returned an empty response. Please try again.' });
    }

    return jsonResponse(200, { text });
  } catch (error) {
    console.error('Gemini chat function error:', error);
    const detail = error instanceof Error ? error.message : '';
    const statusCode = /429|quota|rate.?limit/i.test(detail) ? 429 : 502;
    const message = statusCode === 429
      ? 'The AI assistant has reached its request limit. Please try again later.'
      : /401|403|api key|permission|authentication/i.test(detail)
        ? 'The AI assistant could not authenticate. Please check the Gemini API key configuration.'
        : /404|not found|model/i.test(detail)
          ? 'The AI model is unavailable. Please check the configured Gemini model.'
          : 'Sorry, the AI assistant could not connect. Please try again later.';
    return jsonResponse(statusCode, { error: message });
  }
};
