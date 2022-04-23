import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import React from "react";
import { IconButton, InputBase } from "@mui/material";
//set số thập phân 2 chữ số
export default function UnitSelect({ length, setItemLength }) {
    return (
        <React.Fragment>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => length && setItemLength(length - 0.5)}>
                <IndeterminateCheckBox />
            </IconButton>
            <InputBase sx={{ border: 1, borderColor: '#4e5b73', width: '6ch', px: 1 }}
                inputProps={{ style: { textAlign: 'center' } }}
                value={length}
                onChange={(e) => {
                    const tmp = Number(e.target.value)
                    setItemLength(tmp ? (tmp < 500 ? tmp : 500) : 0)
                }}
            >
            </InputBase>
            <IconButton sx={{ color: '#4e5b73' }} component="span" onClick={() => length < 500 && setItemLength(length + 0.5)}>
                < AddBox />
            </IconButton>
        </React.Fragment >
    )
}