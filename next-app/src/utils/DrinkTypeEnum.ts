enum DrinkType {
    Alcohol = 'ALCOHOL',
    NonAlcohol = 'NON_ALCOHOL',
}

namespace DrinkType {
    export function toMessageKey(type: DrinkType) {
        switch (type) {
            case DrinkType.Alcohol:
                return "Alcohol";
            case DrinkType.NonAlcohol:
                return "Non Alcohol";
        }
    }
}

export {
    DrinkType,
}