import { Stack, Link } from "@mui/material"
export default function Footer() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Link variant="body1" href="/" color="inherit" underline="hover">
                Chính sách bảo mật
            </Link>
            <Link variant="body1" href="/" color="inherit" underline="hover">
                Chính sách đổi trả
            </Link>
            <Link variant="body1" href="/" color="inherit" underline="hover">
                Phương thức vận chuyển
            </Link>
        </Stack>
    )
}