import Box from '@mui/material/Box';
import axios from 'axios'
import qs from 'qs'
import { useState, useEffect } from 'react';
export default function AdsRow() {
    const [ads, setAds] = useState('')
    const fetchData = async () => {
        const query = qs.stringify(
            {},
            { encodeValuesOnly: true },
        )
        const result = await axios.get(
            `${process.env.REACT_APP_STRAPI_URL}/api/homepage?${query}`,
        )
        setAds(result.data.data.attributes.signup_section)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Box sx={{ bgcolor: '#4E5B73', height: 45, display: 'flex', px: { xs: 3, md: 0 } }}>
            <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                <svg height="45">
                    <polygon points="170 0,200 25,170 50,0 50,0 0" fill="#2c3444">
                    </polygon>
                </svg>
            </Box>
            <Box sx={{ display: 'inline', alignSelf: "center", color: 'white' }}>
                {ads}
            </Box>
        </Box>
    )
}