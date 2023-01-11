import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import PopUp from '../Components/PopUp';
import GetValueWindow from '../Components/GetValueWindow';

const VISIBLE_FIELDS = ['Tenant', 'Intersection', 'Metric Unit'];


  
  const columns = [
    { field: 'tenant_id', headerName: 'Tenant', align: 'center' , headerAlign: 'center' },
    { field: 'intersection_id', headerName: 'Intersection', align: 'center' , headerAlign: 'center'},
    { field: 'metric_id', headerName: 'Metric ID', width: 250 , align: 'center' , headerAlign: 'center'},
    { field: 'column_name', headerName: 'Column Name', align: 'center' , headerAlign: 'center', hide:true},
    { field: 'metric_label', headerName: 'Metric Label', align: 'center' , headerAlign: 'center'},
    { field: 'metric_unit', headerName: 'Metric Unit', align: 'center' , headerAlign: 'center'},
    { field: 'table_name', headerName: 'Table', align: 'center' , headerAlign: 'center', hide:true},
    {field: 'get_value', headerName: "Value", align: 'center', headerAlign: 'center', renderCell: (params) => {return(<PopUp buttonContent = "Get Value" content={<GetValueWindow tenant= {params.row.tenant_id} intersection={params.row.intersection_id} metricId={params.row.metric_id} />}/>)}}
  ];

export default function ViewMetrics() {

    const [details,setDetails] = useState([])
  

    const getdetails = async () => {
        axios.get(`http://localhost:8080/fetch/details`)
        .then(res => {
            const mappeddetails = res.data.map((e,i) => {
                let temp= JSON.parse(e)
                temp.id=i
                temp.get_value=<Button>Click me</Button>
                return(temp)
            })
            {for(let i=0; i<mappeddetails.length; i++)
                { mappeddetails[i].id=i+1;}}
            setDetails(mappeddetails)
        }
        ).catch(err => {
            console.log("Get error: " + err)
        })
    }

    useEffect(()=>{
        getdetails()
    },[])

  return (
    <div style={{ height: 800, width: 1200, p:2, marginBottom:75, position:'relative'}}>
      <DataGrid rows={details} columns={columns} components={{ Toolbar: GridToolbar }} sx={{ml:30}} />
      </div>
  );
}


