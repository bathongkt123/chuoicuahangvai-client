import { Dialog, DialogTitle, DialogContent, Stack, Divider, Typography, Paper } from "@mui/material";


export default function AdressesDiaglog({ open, onClose, onClickAddress, receiveAddress }) {
    return (
        <Dialog
            fullWidth
            open={open}
            onClose={onClose}>
            <DialogTitle textAlign='center' variant='h5' fontWeight="bold">Chọn một thông tin liên hệ</DialogTitle>
            <DialogContent>

                {
                    receiveAddress.map((item) => {
                        const address = {
                            firstname: item.name.firstname,
                            lastname: item.name.lastname,
                            address: item.address.address,
                            city: item.address.address_three_levels.city,
                            district: item.address.address_three_levels.district,
                            wardId: item.address.address_three_levels.id,
                            ward: item.address.address_three_levels.ward,
                            phone: item.phone,
                        }
                        return (
                            <Paper
                                elevation={12}
                                key={item.id}
                                sx={{
                                    my: 2,
                                    borderRadius: 1,
                                    py: 1,
                                    px: 2,
                                    "&:hover": {
                                        bgcolor: '#EEEDE8',
                                        cursor: 'pointer',

                                    }
                                }}
                                onClick={onClickAddress(address)}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Họ và tên:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.lastname} ${address.firstname}`}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Địa chỉ:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.address}`}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Phường/Xã:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.ward}`}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Quận/Huyện:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.district}`}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Tỉnh/Thành Phố:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.city}`}
                                    </Typography>
                                </Stack>
                                <Divider sx={{ my: 1 }} />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="body1" fontWeight='bold'>Số điện thoại:</Typography>
                                    <Typography variant="body1" fontWeight='bold'>
                                        {`${address.phone}`}
                                    </Typography>
                                </Stack>
                            </Paper>
                        )
                    }

                    )
                }



            </DialogContent>

        </Dialog>
    )
}