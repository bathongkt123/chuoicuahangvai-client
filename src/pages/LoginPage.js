import React from 'react';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

export default function LoginPage() {

 
        return (
            <div style={{textAlign: 'center',  justifyContent:'center', alignItems:'center', margin: '50px'}}
            >
                <Box>
                <h1>ĐĂNG NHẬP</h1>
                <Link href="/" color="inherit" style={{paddingRight:'5px'}}>
                    Trang chủ 
                </Link>
                 /
                <Link href="/login" color="inherit" style={{padding:'0px 5px'}}>
                    Tài khoản 
                </Link>
                /
                <p style={{display : 'inline-block', paddingLeft:'5px'}}>
                    Đăng nhập
                    </p>
                   <div className="register">
                       <form>
           
                                <h3>Số điện thoại</h3>
                                <input type="tel" name="tel" required/>
         
         
                                <h3>
                                Mật khẩu
                                </h3>
                                <input type="password" name="password" required/>
                    
      
             
                
                        <button>
                            Đăng nhập
                        </button>
                        </form>
                        <h1 style={{textAlign: 'left'}}>KHÁCH HÀNG MỚI ?</h1>
                        <Link href="/register">
                        <button>
                            Đăng ký
                        </button>
                        </Link>
                        
                        </div>

                        
                </Box>



            </div>
        );
    }
