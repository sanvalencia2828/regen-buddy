export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    const { image } = req.body;
    if (!image) {
        return res.status(400).json({ error: 'Image is required' });
    }

    const categories = ['🌱 Personal', '🤝 Comunidad', '🌍 Impacto'];

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 100,
                messages: [{
                    role: 'user',
                    content: [
                        {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: 'image/jpeg',
                                data: image,
                            },
                        },
                        {
                            type: 'text',
                            text: 'Evalúa esta imagen y responde ONLY en formato JSON exactamente así: {"score": N, "category": "X", "message": "Y"} donde N es un número 60-100, X es una de estas categorías: "🌱 Personal", "🤝 Comunidad", "🌍 Impacto" (elige la más apropiada para la imagen), Y es un mensaje corto (máximo 30 palabras) de retroalimentación positiva sobre el entrenamiento. Solo responde con el JSON, sin texto adicional.'
                        }
                    ],
                }],
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            return res.status(response.status).json({ error: err });
        }

        const data = await response.json();
        const aiResponse = data.content[0].text;

        let parsed;
        try {
            parsed = JSON.parse(aiResponse);
        } catch {
            parsed = {
                score: Math.floor(Math.random() * 41) + 60,
                category: categories[Math.floor(Math.random() * categories.length)],
                message: '¡Buen entrenamiento! Sigue así.'
            };
        }

        return res.status(200).json({
            score: parsed.score,
            category: parsed.category,
            message: parsed.message
        });
    } catch (error) {
        return res.status(200).json({
            score: Math.floor(Math.random() * 41) + 60,
            category: categories[Math.floor(Math.random() * categories.length)],
            message: '¡Buen esfuerzo en el entrenamiento! ¡Sigue mejorando!'
        });
    }
}
