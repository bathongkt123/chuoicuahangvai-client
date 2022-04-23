import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import React from "react";
import { IconButton, InputBase, Stack, Box, Typography } from "@mui/material";
//set số thập phân 2 chữ số

export default function UnitSelect({ length, setItemLength }) {
    const pattern = /^(0|[1-9]{1,3})(?:[.]([0-9]{0,2}))?$/
    const minLength = 0.5
    const maxLength = 900
    const step = 1
    return (
        <Stack>
            <Typography variant="body2" color={length < minLength && 'red'}>Tối thiểu: {minLength}</Typography>
            <Box>
                <IconButton sx={{ color: '#4e5b73' }} component="span"
                    onClick={() => length - step > minLength ? setItemLength(parseFloat(length) - step) : setItemLength(minLength)}>
                    <IndeterminateCheckBox />
                </IconButton>
                <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '8ch', px: 1 }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={length}
                    onChange={(e) => {
                        const value = e.target.value
                        if (!value) {
                            setItemLength(minLength)
                            return
                        }
                        if (pattern.test(value)) {

                            setItemLength(value)
                        }
                        else {
                            e.preventDefault()
                        }
                    }
                    }

                />
                <IconButton sx={{ color: '#4e5b73' }} component="span"
                    onClick={() => length + step < maxLength ? setItemLength(step + parseFloat(length)) : setItemLength(maxLength)}>
                    < AddBox />
                </IconButton>
            </Box>
            <Typography variant="body2" color={length > maxLength && 'red'}>Tối đa: {maxLength}</Typography>
        </Stack >
    )
}