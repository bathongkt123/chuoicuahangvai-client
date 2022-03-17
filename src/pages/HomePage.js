import React from 'react';
export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

class Header extends React.Component {
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

class Body extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>This is body</h1>
        );
    }
}

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>This is footer</h1>
        );
    }
}
