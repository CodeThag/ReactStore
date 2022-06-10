import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'seconderay.main'
    },
    '&.active': {
        color: 'text.secondary'
    }
};


const Header: FunctionComponent<Props> = ({ darkMode, handleThemeChange }) => {
    return (<AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>React Store</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Box>

            <Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }, index) => {
                        return (
                            <ListItem
                                key={index}
                                component={NavLink}
                                to={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>)
                    })}
                </List>
            </Box>
            
            <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{ color: 'inherit' }}>
                    <Badge badgeContent={4} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }, index) => {
                        return (
                            <ListItem
                                key={index}
                                component={NavLink}
                                to={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>)
                    })}
                </List>
            </Box>
        </Toolbar>
    </AppBar>);
}

export default Header;