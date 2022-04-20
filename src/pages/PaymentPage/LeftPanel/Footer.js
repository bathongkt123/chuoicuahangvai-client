import { Stack, Link, Divider } from "@mui/material"
import { Fragment } from "react"
export default function Footer() {
    return (
        <Fragment>
            <Divider variant="middle" />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                mt={2}
                mb={4}
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
        </Fragment>
    )
}