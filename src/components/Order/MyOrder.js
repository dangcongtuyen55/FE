import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { myOrders } from "../../Redux/Action/OrderAction";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export const MyOrder = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector((state) => state.myOrder);
  //   const { user } = useSelector((state) => state.user);
  const columns = [
    { field: "id", headerName: "Mã đơn hàng", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã chuyển"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Tổng Tiền",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Chi tiết",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <span className="hover:text-sky-400">
              <RemoveRedEyeIcon />
            </span>
          </Link>
        );
      },
    },
  ];

  const rows = [];
  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.isConfirmed
          ? item.isDelivered
            ? "Đã chuyển"
            : "Chưa chuyển"
          : "Chưa xác nhận",

        amount: item.Amount,
      });
    });

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);

  return (
    <div className="bg-white">
      {/* {loading ? (
        <div>loading...</div>
      ) : (
        <>
         
        </>
      )} */}
      <div className="text-2xl ml-5">Đơn hàng của {user.name}</div>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={10}
        disableSelectionOnClick
        className="myOrdersTable"
        autoHeight
      />
    </div>
  );
};
