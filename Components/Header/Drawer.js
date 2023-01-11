import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './NavBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import theme1 from '../../Resources/Theme';
import * as icons from '@mui/icons-material';
import './Drawer.css'



const drawerWidth = 240;


const Additems = [{
    label: 'Add Metric',
    icon: 'Add',
    ref: '#',
},
{
    label: 'Configure Metric',
    icon: 'Settings',
    ref: '#',
},
{
    label: 'Add Group',
    icon: 'PlaylistAdd',
    ref: './#',
},
{
    label: 'Configure Group',
    icon: 'SettingsSuggest',
    ref: '#',
}]

const Readitems = [{
    label: 'View Metrics',
    icon: 'CalendarViewMonth',
    ref: '#'
},
{
    label: 'View Metrics Group',
    icon: 'CalendarViewWeek',
    ref: '#',
}]


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(NavBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        // width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MyDrawer() {
    const theme = theme1
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar action={handleDrawerOpen} open={open} position="fixed"/>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style = {{backgroundColor: '#007fd3'}}>
                    <Typography color='#fefefe' variant="h5" style={{position: 'relative', bottom: '0px', left: '-50px'}}>
                        Actions
                    </Typography>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                {[{label: 'Create Dashboard', icon:'Dashboard'}].map(({ label, icon,ref }) => {
                        const Icon = icons[icon];
                        return (
                            <Link to={"/" + label.replace(' ','')} style={{color:'black', textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {label}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            </Link>
                        )
                    })}
                </List>
                <Divider />
                <List>
                    {Readitems.map(({ label, icon }) => {
                        const Icon = icons[icon];
                        return (
                            <Link to={"/" + label.replace(' ','')} style={{color:'black', textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {label}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            </Link>
                        )
                    })}
                    {/* <ListWithIcons text={k} icon={v}/> */}

                </List>
                <Divider />
                <List>
                    {Additems.map(({ label, icon, ref }) => {
                        const Icon = icons[icon];
                        return (
                            <Link to={"/" + label.replace(' ','')} style={{ color:'black', textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {label}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            </Link>
                        )
                    })}
                    {/* <ListWithIcons text={k} icon={v}/> */}

                </List>
            </Drawer>
        </Box>
    );
}
