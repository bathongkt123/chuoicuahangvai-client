import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import { Fragment } from "react";
import { IconButton, InputBase, Tooltip } from "@mui/material";
//set số thập phân 2 chữ số
const PATTERN = /^(0|([1-9][0-9]*))(?:[.]([0-9]{0,2}))?$/
const STEP = 1
export default function UnitSelect({ length, setItemLength, maxLength, minLength }) {
    const title = length < minLength ?
        `Đặt tối thiểu từ ${minLength} mét` :
        (
            length > maxLength ?
                `Hàng còn tối đa ${maxLength} mét` :
                ``
        )
    return (

        <Fragment>
            <IconButton sx={{ color: '#4e5b73' }} component="span"
                onClick={() => length - STEP > minLength ? setItemLength((length - STEP).toFixed(2) * 1) : setItemLength(minLength)}>
                <IndeterminateCheckBox />
            </IconButton>
            <Tooltip title={title}>
                <InputBase error sx={{
                    border: 1, width: '8ch', px: 1,
                    borderColor: (length > maxLength || length < minLength) ? '#f20515' : '#4e5b73'
                }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={length}
                    onChange={(e) => {
                        const value = e.target.value
                        if (!value) {
                            setItemLength(0)
                            return
                        }
                        if (PATTERN.test(value)) {
                            setItemLength(value)
                            return
                        }
                        e.preventDefault()
                    }
                    }

                />
            </Tooltip>
            <IconButton sx={{ color: '#4e5b73' }} component="span"
                onClick={() => setItemLength((parseFloat(length) + STEP).toFixed(2) * 1)}>
                < AddBox />
            </IconButton>
        </Fragment>


    )
}