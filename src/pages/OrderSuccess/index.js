import { ButtonGroup, Container, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "auth/useAuth"
export default function OrderSuccess() {
    const { token } = useAuth()
    const navigate = useNavigate()
    return (
        <Container sx={{ bgcolor: '#EEEDE8', display: 'flex', minHeight: '100vh', flexDirection: 'column' }} maxWidth={false} >
            <Typography variant='h4' my={2} fontWeight='bold' color='inherit'>
                Đơn hàng của quý khách đã được tiếp nhận
            </Typography>
            <Typography variant='h5' my={2} color='inherit'>
                Cảm ơn vì đã tin tưởng mua sắm ở cửa hàng chúng tôi
            </Typography>
            {!token ?
                <Typography variant='body1' my={2} fontWeight='bold' color='inherit'>
                    Quý khách sẽ nhận được thông tin chi tiết đơn hàng, và quá trình giao hàng qua email đã điền trong đơn
                </Typography>
                :
                <Typography variant='body1' my={2} fontWeight='bold' color='inherit' >
                    Quý khách có thể xem thông tin chi tiết đơn hàng, và quá trình giao hàng <Link to='/account'>tại đây</Link>
                </Typography>
            }
            <ButtonGroup variant="contained" color="secondary" size="large" disableElevation>
                <Button onClick={() => navigate('/menu')}>Tiếp tục mua sắm</Button>
            </ButtonGroup>
        </Container>
    )
}