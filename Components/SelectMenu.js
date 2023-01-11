import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Box from '@mui/material/Box'
import { textAlign } from '@mui/system'
import PropTypes from 'prop-types';
import './SelectMenu.css';

export default function SelectMenu(props){
   const {variant, label, items, value, onSelect} = props

    function putValue(e){
        onSelect(value => e.target.value)
        
    }
    return(   
            <Box 
            // sx={{
            //     '& .MuiTextField-root': { m: 1, minWidth: props.stylex.minWidth , textAlign:'center'},
            //   }}
              
            >      
                    <TextField
                    
                    select
                    variant={props.variant}
                    id={props.label.toLowerCase().replace(' ','')}
                    label={props.label}
                    placeholder='Choose ID'
                    value={value}
                    onChange={putValue}
                    sx={{width:150}}
                    
                    
                    >
                    {props.items.map(e=>{
                       return( <MenuItem value={e}>{e}</MenuItem>)
                    })}
                    </TextField>

            </Box>
        
    )
}

SelectMenu.propTypes = {
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    variant: PropTypes.string,
    label: PropTypes.string.isRequired
  };