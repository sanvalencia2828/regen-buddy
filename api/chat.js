export default async function handler(req, res) {
<<<<<<< HEAD
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
=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5',
                max_tokens: 150,
                messages: [{ role: 'user', content: prompt }],
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            return res.status(response.status).json({ error: err });
        }

    const data = await response.json();
    return res.status(200).json({ reply: data.choices[0].message.content.trim() });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
>>>>>>> 40e8ac816f590273761235ff927c6a54f7176920
}
