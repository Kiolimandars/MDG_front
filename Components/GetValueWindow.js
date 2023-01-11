import { Button, FormControl, TextField, Box, Divider } from '@mui/material'
import {React, useState, useEffect} from 'react'
import './GetValueWindow.css'
import SelectMenu from './SelectMenu'
import axios from 'axios'



export default function GetValueWindow(props) {
    const [clusters,setClusters]= useState([])
    const [partitions,setPartitions]= useState([])
    const [partitionValue,setPartitionValue]= useState("")
    const [clusterValue,setClusterValue]= useState("")
    const [result,setResult] = useState()

    const getPartitons = async () => {
        axios.post(`http://localhost:8080/fetch/partitions`,{"tenant" : props.tenant,"intersection" : props.intersection})
        .then(res => {
            setPartitions(res.data)          
        }
        ).catch(err => {
            console.log("Get error: " + err)
        })
    }

    const getClusters = async () => {
        axios.post(`http://localhost:8080/fetch/clusters`,{"tenant" : props.tenant,"intersection" : props.intersection})
        .then(res => {
            setClusters(res.data)          
        }
        ).catch(err => {
            console.log("Get error: " + err)
        })
    }

    const handleOnClick = async () => {
        const data = {
            "tenant" : props.tenant,
            "intersection" : props.intersection,
            "metric" : props.metricId,
            "p":[partitionValue],
            "c":[clusterValue]
        }
        console.log("dataFromGetval= ", data)
        axios.post(`http://localhost:8080/fetch/getValue`, data).then(res => {
            setResult(JSON.stringify(res.data))          
        }
        ).catch(err => {
            console.log("Get error: " + err)
            alert("No value yet here, Try another combination fo clustering keys and partition keys")
        })
    }

    useEffect(() =>{
        getPartitons()
        getClusters()
    },[])
    return (
        <Box className='container' sx={{ display: "flex", flexDirection: 'row', p:2 }}>
            <Box className="valueForm" sx={{display: "flex", flexDirection: 'column', width: 'auto'}}>
                    <SelectMenu variant="outlined" label="Partition Key" items={partitions} value={partitionValue} onSelect={setPartitionValue} sx={{p:0.5,my:1 ,width:150}}/>
                    <SelectMenu variant="outlined" label="Clustering Key" items={clusters} value={clusterValue} onSelect={setClusterValue} sx={{p:0.5, my:1}}/>
                    
            </Box>
            <Divider orientation="vertical" sx={{m:1}}  flexItem />
            <Box className="valueResult" sx={{display:'flex' , alignItems:'center',}} >
                <TextField placeholder='Metric Value' value={result} sx={{minWidth:150, blockSize: 'fit'}}></TextField>
                <Button variant='contained' sx={{m:1}} onClick={handleOnClick}>Submit</Button>
            </Box>
        </Box>
    )
}