import { Box, createTheme } from "@mui/system"
import React, { useEffect } from "react"
import { useState } from "react"
import GamesTable from "../components/fetch/table"
import { GameData } from "../types/GameData"
import * as styles from '../styles/fetch.module.css'


const Fetch = () => {
    const [data, setData] = useState<GameData[]>([{
        id: 0,
        name: 'Game Name',
        genre: ['Genre'],
        developers: ['Developer A'],
        publishers: ['Publisher A'],
        releaseDates: {
            Japan: 'N/A',
            NorthAmerica: 'N/A',
            Europe: 'N/A',
            Australia: 'N/A',
        }
    }])

    const fetchFunction = async () => {
        const options = {
            method: 'GET',
            headers: 'text/json'
        }
        const res = await fetch('https://api.sampleapis.com/switch/games')

        const responseData = await res.json()
        setData(responseData)
    }

    useEffect(() => {
        //Trigger re-render
    }, [data]) 

    return(
        <Box
            component={'div'}
            className={styles.container}
        >
            <Box
                component={'h2'}
            >
                Cool List
            </Box>
            <button onClick={fetchFunction}>
                Click to fetch!
            </button>

            <GamesTable gameData={data} />
        </Box>
    )
}

export default Fetch

