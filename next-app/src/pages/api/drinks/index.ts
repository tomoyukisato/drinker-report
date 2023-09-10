import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, _res: NextApiResponse) => {
    const { method, body } = _req;
    console.log(method);
    console.log("body");
    console.log(body);
    switch (method) {
        case 'GET':
            const drinks = await prisma?.drink.findMany();

            console.log("drinks~~~~");
            _res.status(200).json(drinks)
            break;
        case 'POST':
            const drink = await prisma.drink.create({
                data: {
                    "name": body.name,
                    "perOneMl": body.ml_per_one_drink,
                    "type": body.drink_type,
                }
            });

            console.log("create drink");
            _res.status(201).json(drink);
            // _res.json({ message: 'POSTリクエスト' });
            break;
        case 'PATCH':
            _res.json({ message: 'PATCHリクエスト' });
            break;
        default:
            _res.json({ message: 'GET/POST/PATCHでもないリクエストです。' });
            break;
    }
}