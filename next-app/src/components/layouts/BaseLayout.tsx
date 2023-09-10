import { ReactNode } from "react";
import { SideMenu } from "./SideMenu";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Header } from "./Header";


function Layout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <SideMenu />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
};

export default Layout;

