import * as React from 'react';
import MainRow from './MainRow'
import CategoryRow from './CategoryRow';
import AdsRow from './AdsRow'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};
export default function Header() {

    return (
        <React.Fragment>
            <HideOnScroll>
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
            </HideOnScroll>

        </React.Fragment>
    );
}