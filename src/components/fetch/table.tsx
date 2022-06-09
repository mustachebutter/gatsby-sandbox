import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { GameData } from "../../types/GameData";

export default function GamesTable(props: { gameData: GameData[] }) {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Developers</TableCell>
                        <TableCell>Publishers</TableCell>
                        <TableCell>Release Date (NA)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       props.gameData.map((row: GameData) => (
                                <TableRow
                                    key={`game-${row.id}`}
                                >
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.genre}</TableCell>
                                    <TableCell>{row.developers}</TableCell>
                                    <TableCell>{row.publishers}</TableCell>
                                    <TableCell>{row.releaseDates.NorthAmerica}</TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}