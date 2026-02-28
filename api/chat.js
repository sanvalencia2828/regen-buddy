export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { prompt } = req.body;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 100,
            temperature: 0.7,
        }),
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
