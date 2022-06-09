export type GameData = {
    id: number,
    name: string,
    genre: Array<string>,
    developers: Array<string>,
    publishers: Array<string>,
    releaseDates: {
        Japan: string,
        NorthAmerica: string,
        Europ: string,
        Australia: string
    }
}
