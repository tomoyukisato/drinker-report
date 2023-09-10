import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { DrinkType } from '@/utils/DrinkTypeEnum';
import { Drink } from "@/types/drink";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";


interface DrinkListProps {
    drinks?: Array<Drink>
}


export function DrinkDataTable({ drinks }: DrinkListProps) {
    console.log("cocktails")
    console.log(DrinkType)


    function TypeCompnent({ drinkType }: { drinkType: DrinkType }): JSX.Element {
        if (drinkType == DrinkType.Alcohol) {
            return <Chip icon={<SportsBarIcon />} label={DrinkType.toMessageKey(DrinkType.Alcohol)} color="primary" />
        } else {
            return <Chip icon={<LocalCafeIcon />} label={DrinkType.toMessageKey(DrinkType.NonAlcohol)} color="success" />
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">TYPE</TableCell>
                        <TableCell align="left">NAME</TableCell>
                        <TableCell align="left">1杯の量(ml)</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {drinks?.map((row: Drink) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left" component="th" scope="row">
                                <TypeCompnent drinkType={row.type} />
                            </TableCell>
                            <TableCell align="left" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left" component="th" scope="row">
                                {row.perOneMl} ml
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}