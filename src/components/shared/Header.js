import { AppBar, Toolbar, IconButton, Typography, makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import theme from "../../theme";




const useStyles = makeStyles({
    header: {
        backgroundColor: theme.palette.primaryColor
    }
})

const Header = (props) => {
    const {sideDrawerOpen, toggleSideDrawer} = props
    const classes = useStyles()
    return (
        <AppBar position="sticky" className={classes.header}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>toggleSideDrawer(!sideDrawerOpen)}>
                    <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" color="inherit">
                Self-Help
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header