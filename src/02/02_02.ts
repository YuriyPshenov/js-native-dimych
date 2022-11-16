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

type HousesType = {
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

type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressGbType
}
