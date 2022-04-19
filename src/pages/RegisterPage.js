import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export default function RegisterPage() {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Box>
        <h1>ĐĂNG KÝ</h1>
        <Link href="/" color="inherit" style={{ paddingRight: "5px" }}>
          Trang chủ
        </Link>
        /
        <Link href="/login" color="inherit" style={{ padding: "0px 5px" }}>
          Tài khoản
        </Link>
        /<p style={{ display: "inline-block", paddingLeft: "5px" }}>Đăng ký</p>
        <div className="register">
          <form>
            <h3>Họ và tên lót</h3>
            <input type="text" name="Lname" required />

            <h3>Tên</h3>
            <input type="text" name="Fname" required />

            <h3>Số điện thoại</h3>
            <input type="tel" name="tel" required />

            <h3>Mật khẩu</h3>
            <input type="password" name="password" required />

            <h3>Nhập lại mật khẩu</h3>
            <input type="password" name="password" required />

            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Chấp nhận Điều khoản sử dụng và Điều khoản bảo mật"
              />
            </FormGroup>

            <button>Đăng ký</button>
          </form>
        </div>
      </Box>
    </div>
  );
}
