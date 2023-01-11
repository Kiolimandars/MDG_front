import { AppBar, Toolbar, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


const NavBar = (props) => {
    return (
        <div >
            <Box sx={{ flexGrow: 1, mb:10 }} >
                <AppBar  >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.action}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{marginLeft:20}}>Cognira</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
export default NavBar;