import {Link } from "@mui/material"
import React from "react";
import {Button } from "@mui/material";
export default function FormInfo() {
    return (
        <form className="addressinfo" >
            <p style={{display: 'inline'}}>Thông tin liên lạc</p>  
            <p style={{display: 'inline', float: 'right'}}>Đã có tài khoản ?
            <Link  underline="none" href="/login">Đăng nhập</Link>
            </p>  
            <input type="email" style={{width: '100%'}} placeholder="Email">
            </input>     
            <p>Địa chỉ giao hàng</p>       
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
            <Link href="/cart">
            <Button  variant="contained" sx={{backgroundColor: '#384257'}}>
                {`< Trở về giỏ hàng`} 
            </Button>
            </Link>

            <Button  variant="contained" sx={{backgroundColor: '#384257', float: 'right'}}>
                {`Chuyển đến trang vận chuyển>`} 
            </Button>
        </form>
    )
}
