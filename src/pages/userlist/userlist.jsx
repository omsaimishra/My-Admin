import "./userlist.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import { initialRows } from "../../components/tabledatahome";
import { Link, NavLink } from "react-router-dom";

const Userlist = () => {
  const [data, setData] = useState(initialRows);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 130 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={`${params.row.username} avatar`}
          className="userlist-avatar"
        />
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
       
        <div className="userdiv">
           <NavLink to={`/users/${params.row.id}`}>
          <button
            className="userlist-delete-btn"
        
          >
          Edit
          </button>
          </NavLink>
      
          <Delete className="userlistdelete"     onClick={() => handleDelete(params.row.id)}/>
            </div>
        </>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="userlist">
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowHeight={() => "auto"}
          sx={{ border: 0, flexGrow: 1 }}
        />
      </Paper>
    </div>
  );
};

export default Userlist;
