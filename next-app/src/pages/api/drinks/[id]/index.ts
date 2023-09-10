import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// 取得
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {
    const query = _req.query;
    const drink = await prisma?.drink.findUnique({
        where: { id: Number(query.id) }
    });
    if (drink == null) {
        return _res.status(404).json({ error: { messsage: "対象のドリンクは存在しません" } });
    }
    return _res.status(200).json(drink)
}