
import { createTheme } from '@mui/material';


const theme1 = createTheme({
    overrides:{
        palette: {
            primary: {
                main: '#007fd3',
            },
            secondary:{
                main: '#fefefe'
            }
        }
    }
})

export default theme1