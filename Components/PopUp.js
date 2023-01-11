
import React, { useState } from 'react';
import './PopUp.css'
import { Button } from '@mui/material';
import {Dialog, DialogTitle} from '@mui/material';
import PropTypes from 'prop-types';
import GetValueWindow from './GetValueWindow';


function SimpleDialog(props) {
    const { onClose, open, title, contents } = props;

    const handleClose = () => {
        onClose();
      };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        {contents}
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  };


function PopUp(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (<div>
      <Button variant="contained" onClick={handleClickOpen} sx={{borderRadius:3, width: 100}}>
        {props.buttonContent}
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title="Select Parameters"
        contents={props.content}
      />
    </div>)
}

export default PopUp;