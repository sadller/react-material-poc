import InboxIcon from '@material-ui/icons/Inbox';
import { makeStyles, ListItem, List, ListItemIcon, ListItemText, Switch } from "@material-ui/core"
import theme from '../../theme';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
    "sidebar": {
        position: 'fixed',
        left: (props)=>(props.sideDrawerOpen)? '0px': '-300px',
        maxWidth: '300px',
        width: '70%',
        height: '100%',
        boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
        backgroundColor: theme.palette.backgroundColor,
        color: theme.palette.textColor,
        transition: '0.3s ease-out',
        zIndex: '200',
    },
    "sidebar.navlink": {
        textDecoration: 'none',
        color: theme.palette.secondaryTextColor,
    },
    "sidebar.link.active": {
        color: theme.palette.primaryColor,
        "& svg": {
            color: theme.palette.primaryColor,
        }
    }
})




const Sidebar = (props) => {
    const classes = useStyles(props)

    
    return (

        <List className={classes.sidebar} >
            <NavLink to="/" exact className={classes["sidebar.navlink"]} activeClassName={classes["sidebar.link.active"]}>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </NavLink>
            <NavLink to="/contact-us" exact className={classes["sidebar.navlink"]} activeClassName={classes["sidebar.link.active"]}>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact us" />
                </ListItem>
            </NavLink>
        </List>
    )
}

export default Sidebar