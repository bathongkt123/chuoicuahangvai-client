const statusTranslate = (status) => {
    switch (status) {
        case 'initialize':
            return 'Khởi tạo'
        case 'confirmed':
            return 'Xác nhận'
        case 'packaged':
            return 'Đóng gói'
        case 'delivery':
            return 'Vận chuyển'
        case 'success':
            return 'Thành công'
        case 'canceled':
            return 'Bị hủy'
        default:
            return 'Khởi tạo'
    }
}
export default statusTranslate