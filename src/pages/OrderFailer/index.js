import { ButtonGroup, Container, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "auth/useAuth"
export default function OrderSuccess() {
    const { token } = useAuth()
    const navigate = useNavigate()
    return (
        <Container sx={{ bgcolor: '#EEEDE8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }} maxWidth={false} >
            <Typography variant='h4' my={2} fontWeight='bold' color='inherit'>
                Oop!.Đơn hàng của quý khách đã bị hủy vì giao dịch thanh toán thất bại
            </Typography>
            {!token ?
                <Typography variant='body1' my={2} fontWeight='bold' color='inherit'>
                    Quý khách có thể xem chi tiết qua email đã điền trong đơn
                </Typography>
                :
                <Typography variant='body1' my={2} fontWeight='bold' color='inherit' >
                    Quý khách có thể xem thông tin chi tiết đơn hàng <Link to='/account'>tại đây</Link>
                </Typography>
            }
            <ButtonGroup variant="contained" color="secondary" size="large" disableElevation>

                <Button onClick={() => navigate('/menu')}>Tiếp tục mua sắm</Button>
            </ButtonGroup>
        </Container>
    )
}