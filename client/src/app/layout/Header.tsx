import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const Header: FunctionComponent<Props> = ({darkMode, handleThemeChange}) => {
    return (<AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h6">React Store</Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
    </AppBar>);
}

export default Header;