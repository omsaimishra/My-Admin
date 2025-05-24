import "./product.css"
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import { ProductsRows } from "../../components/tabledatahome";
import { Link, NavLink } from "react-router-dom";
const Products=()=>{
    const [data,setData] = useState(ProductsRows);
    const handleDelete = (id) => {
    setData((prev) => prev.filter((row) => row.id !== id));
  };
   const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Product", width: 180 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt={`${params.row.name} avatar`}
        className="userlist-avatar"
      />
    ),
  },
  { field: "stock", headerName: "Stock", width: 100 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "price", headerName: "Price", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 140,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div className="userdiv">
        <NavLink to={`/prodouct/${params.row.id}`}>
          <button className="userlist-delete-btn">Buy</button>
        </NavLink>
        <Delete
          className="userlistdelete"
          onClick={() => handleDelete(params.row.id)}
        />
      </div>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 8 }; 

    return(
        <div className="prodouct"> <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{ pagination: { paginationModel } }}
                  pageSizeOptions={[5, 10, 20]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  getRowHeight={() => "auto"}
                  sx={{ border: 0, flexGrow: 1 }}
                /></div>
    );
}
export default Products;