import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, Grid, Link, Stack } from "@mui/material";
export default function Footer() {
  return (
    <Box>
      <Grid container spacing={5} sx={{
        display: 'flex',
        mt: 'auto',
        bgcolor: "#2C3444",
        color: "white",
        px: 2
      }}>
        <Grid item xs={12} md={3}>
          <Box borderBottom={1}>
            <h3>THÔNG TIN LIÊN HỆ</h3>
          </Box>
          <Box>
            <p style={{ fontWeight: "bold" }}>CÔNG TY TNHH CHV </p>
            <p> Địa chỉ: 273 Nguyễn Văn Đậu - Bình Thạnh - TP.HCM </p>
            <p> SĐT: 0907865755 </p>
            <p> Email: cuahangvai@gmail.com </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box borderBottom={1}>
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Các câu hỏi thường gặp
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Hướng dẫn đặt hàng
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Phương thức vận chuyển
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Chính sách đổi trả
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Hướng dẫn trả góp
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box borderBottom={1}>
            <h3>VỀ CỬA HÀNG VẢI</h3>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Giới thiệu về cửa hàng vải
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Chính sách bảo mật thanh toán
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Chính sách bảo mật thông tin cá nhân
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Điều khoản sử dụng
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box borderBottom={1}>
            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ paddingRight: 5 }}
              ></FontAwesomeIcon>
              Facebook
            </Link>
            <Box>
              <Link href="/" color="inherit" underline="hover">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ paddingRight: 5 }}
                ></FontAwesomeIcon>
                Twitter
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: "#212631", color: "white", px: 2 }}>
        Copyright © 2021 CỬA HÀNG VẢI
      </Box>
    </Box>
  );
}
