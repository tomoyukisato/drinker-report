import { DrinkType } from "@/utils/DrinkTypeEnum";

export interface Drink {
    id: number
    name: string,
    perOneMl: number,
    type: DrinkType,
}

