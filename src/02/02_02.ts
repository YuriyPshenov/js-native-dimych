export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}

type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type StreetGbType = {
    title: string
}

type AddressGbType = {
    street: StreetGbType
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressGbType
}
