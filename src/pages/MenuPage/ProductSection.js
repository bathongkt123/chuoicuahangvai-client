import React from 'react';
import Grid from '@material-ui/core/Grid'

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
export default function ProductSection() {

    return (     
        <Grid container spacing={10}>
            {rows}          
                           
        </Grid>
    );
}