import { ReactNode } from "react";
import { SideMenu } from "./SideMenu";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Header } from "./Header";
import CocktailList from "@/pages/drink";
import { CocktailTable } from "../features/CocktailTable";


export const ShowDrinksLayout = (data) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CocktailTable cocktails={data} />
        </Box>
    )
};

export default ShowDrinksLayout;

