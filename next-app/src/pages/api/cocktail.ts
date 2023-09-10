
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // URLの130000は東京を表しているらしいです
    const respose = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await respose.json();

    res.status(200).json(data)
}