import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';


interface CocktailListProps {
    cocktails?: CocktailDrinks
}

export function CocktailTable({ cocktails }: CocktailListProps) {
    console.log("cocktails")
    console.log(cocktails)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cocktails?.drinks.map((row: CocktailDrink) => (
                        <TableRow
                            key={row.idDrink}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.idDrink}
                            </TableCell>
                            <TableCell align="left" component="th" scope="row">
                                {row.strDrink}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}