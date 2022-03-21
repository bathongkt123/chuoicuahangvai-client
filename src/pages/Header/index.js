import * as React from 'react';
import Row1 from './Row1'
import Row2 from './Row2';
import Row3 from './Row3'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
export default function Header() {

    return (
        <React.Fragment sx={{ flexGrow: 1, bgcolor: '#EEEDE8' }}>
            <AppBar position="sticky" sx={{
                bgcolor: "#EEEDE8",
                color: "#000000"
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold'
                }} >
                    <Box sx={{ width: '100%' }}>
                        <Row1 />
                        <Row2 />

                    </Box>
                </Toolbar>
                <Row3 />
            </AppBar>
        </React.Fragment>
    );
}