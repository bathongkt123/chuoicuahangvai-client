import {
  Table,
  TableContainer,
  TableRow,
  Paper,
  TableBody,
  TableHead,
  TablePagination,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState, Fragment } from "react";
import CustomTableCell from "components/CustomTableCell";
import ProductRow from "./ProductRow";
import qs from "qs";
import axios from "axios";
import formatPrice from "helper/formatPrice";
import AddressTable from "./AddressTable";
import HistoryTable from "./HistoryTable";
export default function OrderDetailTable({ orderId }) {
  //set Pagination
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const rowsPerPage = 4;
  //order
  const [order, setOrder] = useState(null);
  let total = 0;
  useEffect(() => {
    const fetchData = async () => {
      const query = qs.stringify(
        {
          populate: [],
        },
        { encodeValuesOnly: true }
      );
      const result = await axios.get(
        `${process.env.REACT_APP_STRAPI_URL}/api/customer-orders/${orderId}?${query}`
      );
      // console.log(result)
      setOrder(result.data);
    };
    fetchData();
  }, [orderId]);
  if (!order) return null;
  return (
    <Fragment>
      <TableContainer component={Paper} elevation={12} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell align="left">SẢN PHẨM</CustomTableCell>
              <CustomTableCell align="right">ĐƠN GIÁ(VNĐ/M)</CustomTableCell>
              <CustomTableCell align="center">ĐỘ DÀI(M)</CustomTableCell>
              <CustomTableCell align="right">THÀNH TIỀN</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                const name =
                  product.inventory_item.sku_quantity.sku.product.name +
                  " - " +
                  product.inventory_item.sku_quantity.sku.sku;
                const price = product.inventory_item.sku_quantity.sku.price;
                const image =
                  product.inventory_item.sku_quantity.sku.images[0].url;
                const length = product.length / 100;
                const subTotal = price * length;
                total += subTotal;
                return (
                  <ProductRow
                    attr={{
                      name,
                      price: formatPrice(Number(price)),
                      image,
                      subTotal: formatPrice(subTotal),
                      length,
                    }}
                    key={product.inventory_item.sku_quantity.sku.id}
                  />
                );
              })}
            <TableRow>
              <TablePagination
                rowsPerPage={rowsPerPage}
                count={order.products.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[]}
                sx={{ backgroundColor: "#EEEDE8" }}
              />
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} align="right">
                {" "}
                TỔNG CHI PHÍ
              </CustomTableCell>
              <CustomTableCell align="right" colSpan={2}>
                {formatPrice(total)}
              </CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} align="right">
                PHÍ VẬN CHUYỂN
              </CustomTableCell>
              <CustomTableCell align="right" colSpan={2}>
                {formatPrice(Number(order.delivery_method.amount))}
              </CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell colSpan={2} align="right">
                TỔNG PHẢI TRẢ
              </CustomTableCell>
              <CustomTableCell align="right" colSpan={2}>
                <Typography variant="h5" color="red">
                  {formatPrice(Number(order.orderAmount))}
                </Typography>
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Receive address and status */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          my: 2,
        }}
      >
        <HistoryTable statuses={order.order_statuses} />
        <Box width={16} height={16} />
        <AddressTable
          attr={{
            name:
              order.receive_address.name.lastname +
              " " +
              order.receive_address.name.firstname,
            phone: order.receive_address.phone,
            address: order.receive_address.address.address,
            city: order.receive_address.address.address_three_levels.city,
            district:
              order.receive_address.address.address_three_levels.district,
            ward: order.receive_address.address.address_three_levels.ward,
            type: order.type,
            deliveryMethod: order.delivery_method.method,
          }}
        />
      </Box>
    </Fragment>
  );
}
