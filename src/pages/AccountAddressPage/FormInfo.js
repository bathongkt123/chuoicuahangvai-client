import { Table, TableContainer, TableRow, Paper, TableBody, TableHead, TablePagination, Link } from "@mui/material"
import CustomTableCell from "components/CustomTableCell"
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Button } from "@mui/material";
export default function FormInfo() {
    return (
        <form className="addressinfo" >
            <input type="text" placeholder="Họ và tên lót">
            </input>
            <input type="text" placeholder="Tên" style={{float: 'right'}}>
            </input>
            <input type="text" style={{width: '100%'}} placeholder="Địa chỉ">
            </input>
            <select style={{width: '100%'}}>
            <option value="" disabled selected hidden>Chọn tỉnh/thành</option>
            </select>
            <select>
            <option value="" disabled selected hidden>Chọn quận/huyện</option>
            </select>
            <select style={{float: 'right'}}>
            <option value="" disabled selected hidden >Chọn phường/xã</option>
            </select>
            <input type="tel" style={{width: '100%'}} placeholder="Số điện thoại">
            </input>
            <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="Địa chỉ mặc định" />
            </FormGroup>
            <Button  variant="contained" sx={{backgroundColor: '#384257'}}>
                Lưu lại
            </Button>
        </form>
    )
}
