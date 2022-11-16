import {CityType, governmentBuildingsType} from "../02/02_02";

export const demolishHousesOnTheStreeet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (gb: Array<governmentBuildingsType>, staffCount: number) => gb.filter(b => b.staffCount > staffCount)
