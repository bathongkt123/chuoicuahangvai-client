import * as React from 'react';
import MainRow from './MainRow'
import CategoryRow from './CategoryRow';
import AdsRow from './AdsRow'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
export default function Header() {

    return (
        <React.Fragment>
            <AppBar position="sticky" sx={{
                bgcolor: "#EEEDE8",
                color: "#000000"
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }} >
                    <Box sx={{ width: '100%' }}>
                        <MainRow />
                        <CategoryRow />
                    </Box>
                </Toolbar>
                <AdsRow />
            </AppBar>
        </React.Fragment>
    );
}