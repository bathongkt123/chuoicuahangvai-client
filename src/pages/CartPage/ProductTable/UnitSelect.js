import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import React from "react";
import { IconButton, InputBase } from "@mui/material";
export default function UnitSelect({ number, setNumber }) {
    return (
        <React.Fragment>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number && setNumber(number - 1)}>
                <IndeterminateCheckBox />
            </IconButton>
            <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                inputProps={{ style: { textAlign: 'center' } }}
                value={number}
                onChange={(e) => {
                    const tmp = parseInt(e.target.value)
                    setNumber(tmp ? (tmp < 999 ? tmp : 999) : 0)
                }}
            >
            </InputBase>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => number < 999 && setNumber(number + 1)}>
                < AddBox />
            </IconButton>
        </React.Fragment >
    )
}