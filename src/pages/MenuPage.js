import React from 'react';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
var data = [{ "name": "Vải lanh",
              "color": "đỏ",
              "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
            { "name": "Vải lanh",
            "color": "đỏ",
            "price": "20000"
            },
    ];
var rows = data.map(function(row){
    return <Grid item xs={12} sm={6} md={4}>
        <p style={{fontWeight: 'bold'}}> {row.name} - {row.color}</p>
        <p> {row.price}đ trên mét</p>
        </Grid>
})
export default function MenuPage() {
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };


 
        return (
            <div style={{textAlign: 'center',  justifyContent:'center', alignItems:'center', margin: '50px'}}
            >
                <Box>
                <h1>HÀNG BÁN CHẠY NHẤT</h1>
                
                <Link href="/" color="inherit" style={{paddingRight:'5px'}}>
                    Trang chủ
                </Link>
                 /
                <Link href="/" color="inherit" style={{padding:'0px 5px'}}>
                    Sản phẩm
                </Link>
                /
                <p style={{display : 'inline-block', paddingLeft:'5px'}}>
                    Bán chạy nhất
                    </p>
                    
                    
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={3}>
                        <FormControl variant="standard" sx={{ mt: 5, minWidth: 150 , textAlign: 'left'}}>
                    <InputLabel id="sort">Sắp xếp theo</InputLabel>
                    <Select
                    labelId="sort"
                    id="sort"
                    value={sort}
                    onChange={handleChange}
                    label="sort"
                    >
                    <MenuItem value={'bestsell'}>Bán chạy nhất</MenuItem>
                    <MenuItem value={'newestarrival'}>Hàng mới</MenuItem>
                    <MenuItem value={'hightolow'}>Giá giảm dần</MenuItem>
                    <MenuItem value={'lowtohigh'}>Giá tăng dần</MenuItem>
                    </Select>
                    <h3>DANH MỤC</h3>
                    <h3>MÀU CHỦ ĐẠO</h3>
                    <h3>KIỂU MẪU</h3>
                    <h3>CHIỀU RỘNG</h3>

                    </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={8} style={{marginTop: '20px'}}>
                            <Grid container spacing={10}>
                            {rows} 
                           
                            </Grid>
                            </Grid>
                    </Grid>
                    
                </Box>



            </div>
        );
    }
