import React from 'react';
export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Shop Name</h3>
                    <p>Search bar</p>
                    <p>Tài khoản</p>
                    <p>Giỏ Hàng</p>
                </div>
                <div>
                    <p>Danh mục sản phẩm</p>
                    <p>Hàng mới về</p>
                    <p>Bán chạy nhất</p>
                    <p>Giảm giá</p>
                    <p>Về chúng tôi</p>
                </div>
                <div>
                    <p>Quảng cáo</p>
                </div>
            </div>
           
        );
    }
}