import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (gb: Array<GovernmentBuildingsType>) => {
    return gb.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (ch: Array<HousesType>) => {
    return ch.map(h => h.address.street.title)
}

export const createMessages = (ch: Array<HousesType>) => {
    let callbackfn = (h: HousesType) => {
        debugger
        return `Hello guys from ${h.address.street.title}`;
    }

    let newArray = ch.map(callbackfn)
    return newArray
}



