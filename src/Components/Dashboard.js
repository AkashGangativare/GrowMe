import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Departments from "./Departments";
function Dashboard() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'employee_name', headerName: 'Name', width: 150 , backgroundcolor: '#bfcdda'},
        { field: 'employee_salary', headerName: 'Salary', width: 120 },
        { field: 'employee_age', headerName: 'Age', width: 90 },
    ];

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        fetchRows();
    }, []);

    const fetchRows = async () => {
        try {
            const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
            const data = await response.json();
            setRows(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2 style={{textAlign:'center', margin: 20}}>Employee Data</h2>
            <div style={{ height: 400, width: '100%', background:'#bfcdda' }}>
                <DataGrid rows={rows} columns={columns} pageSize={20} />
            </div>
            <Departments/> 
        </div>
    )
}

export default Dashboard
