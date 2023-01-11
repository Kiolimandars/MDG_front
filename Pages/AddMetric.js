import { useEffect, useState } from "react";
import { Style } from "@mui/icons-material";
import { Box, FormControl, TextField, InputAdornment, MenuItem } from "@mui/material";
import * as icons from '@mui/icons-material';
import SelectMenu from "../Components/SelectMenu";
import Button from "@mui/material/Button";
import './AddMEtric.css'
import axios from "axios";
import {useFormik} from 'formik'



function GetIcon(props) {
    const Icon = icons[props.icon]
    return (<Icon />)
}
const myStyle = {
    variant: {TextField: 'standard', Button: 'contained'},
}

const metricInfoFields = [{ label: 'Metric ID', icon: 'AccountCircleOutlined' },
{ label: 'Metric Label', icon: 'LabelOutlined' },
{ label: 'Metric Unit', icon: 'MoneyOutlined' }]

const myStyleX = {
    variant: {TextField: 'standard', Button: 'contained'},
    formField: { m: 1, gap: 2, minWidth: 120 },
    mainBox: { p: 1.5,ml:30 ,'& .MuiTextField-root': { m: 1, minWidth: 120, maxWidth: 160, textAlign: 'center' } },
    selectMenu: { minWidth: 120, borderColor: 'red' },
    button: { width: 120, fontSize: 9.5, color: 'black', borderColor: 'black', mx: 1, my:0 }
}

const types = ['Boolean', 'Integer', 'Float', 'String', 'Integer list','String list']

export default function AddMetric() {

    const postvalues = () => {
        axios.post(`http://localhost:8080/fetch/getGroup`, {
            "Tenant": "0",
            "Microservice": "mock_service",
            "Group": "mock_grp"
        })
            .then(res => {
                console.log("wer're posting data", res.data)
            }
            ).catch(err => {
                console.log( "Post error: " + err.message)
            })

    }

    const getTenants = async () => {
        axios.get(`http://localhost:8080/fetch/tenants`)
        .then(res => {
            setTenants(res.data)
            console.log("tenants= ", tenants)           
        }
        ).catch(err => {
            console.log("Get error: " + err)
        })
    }

    const [tenants, setTenants] = useState([]);
    const [clusters, setClusters] = useState([])
    const [partitions, setPartitions] = useState([])
    const [value, setValue] = useState()
    const [type, setType] = useState()
    function putValue(e) {
        setValue(value => e.target.value)
    }

    function putType(e) {
        setType(type => e.target.value)
    }

    useEffect(()=>{
        getTenants()
    },[])

    const formik = useFormik({
        initialValues: {
            tenanti: 1,
            partitions:["","",""],
            clusters:["","",""],
            metricID: "",
            metricLabel: "",
            metricUnit:"",
            metricType: "String"
        }
    })

    const handleAddPartition = () => {
        console.log(partitions.length)
        if (partitions.length < 3) {
            setPartitions(partitions => [...partitions, ''])
        } else {
            alert("You can't have more than 3 partition keys")
        }
    }

    const handleAddCluster = () => {
        console.log(partitions.length)
        if (clusters.length < 3) {
            setClusters(clusters => [...clusters, ''])
        } else {
            alert("You can't have more than 3 cluster keys")
        }
    }


    return (
        <div>
            <Box sx={myStyleX.mainBox}>
            <Box
                display="contents"
                justifyContent="center"
                className='mainBox'
                autoComplete='On'
                sx={myStyleX.mainBox}
            >
                <TextField
                    select
                    variant={myStyle.variant.TextField}
                    id='tenant'
                    label={'Tenant'}
                    placeholder='Choose ID'
                    onChange={formik.handleChange}
                    value={formik.values.tenant}
                >
                    {tenants.map(e => {
                        return (<MenuItem value={e}>{e}</MenuItem>)
                    })}
                </TextField>
                <Button
                    variant="outlined"
                    startIcon={<GetIcon icon='Add' />}
                    onClick={handleAddPartition}
                    sx={myStyleX.button}
                    size='small'
                >Add Partition Key</Button>

                {partitions.map((e, i) => {

                    return (
                        <TextField
                            id={"Part" + (i + 1)}
                            label={"Parition" + (i + 1)}
                            placeholder={"Parition Key " + (i + 1)}
                            sx={myStyleX.formField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {"P" + (i + 1)}
                                    </InputAdornment>
                                ),
                            }}
                            variant={myStyle.variant.TextField}
                            onChange={formik.handleChange}
                            // value={formik.values.partitions[i]}    
                        />
                    )
                })}

                <Button
                    variant="outlined"
                    startIcon={<GetIcon icon='Add' />}
                    onClick={handleAddCluster}
                    sx={myStyleX.button}
                    size='small'
                >Add Cluster Key</Button>

                {clusters.map((e, i) => {

                    return (
                        <TextField
                            id={"Clust" + (i + 1)}
                            label={"Cluster" + (i + 1)}
                            placeholder={"Cluster Key " + (i + 1)}
                            sx={myStyleX.formField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {"C" + (i + 1)}
                                    </InputAdornment>
                                ),
                            }}
                            variant={myStyle.variant.TextField}
                            onChange={formik.handleChange}
                            // value={formik.values.clusters[i]}
                        />
                    )
                })}
                {metricInfoFields.map(({ label, icon },i) => {
                    const Icon = icons[icon]
                    
                    return (
                        <TextField
                            id={label.replace(' ', '')}
                            label={label}
                            placeholder={"My " + label.replace(' ', '')}
                            required
                            sx={myStyleX.formField}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon />
                                    </InputAdornment>
                                ),
                            }}
                            variant={myStyle.variant.TextField}
                            onChange={formik.handleChange}
                            // value={formik.values.metricInfoFields[i].label}
                        />
                    )
                    
                })}

                    <TextField
                    select
                    variant={myStyle.variant.TextField}
                    id='valueType'
                    label={'Type'}
                    placeholder='Choose type'
                    onChange={formik.handleChange}
                    value={formik.values.type}
                >
                    {types.map(e => {
                        return (<MenuItem value={e}>{e}</MenuItem>)
                    })}
                </TextField>
            </Box>
            <Button className="submitButton" variant={myStyle.variant.Button} onClick={getTenants} > Submit</Button>
            </Box>
        </div>
    )
}