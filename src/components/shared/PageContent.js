import theme from "../../theme";
import {Backdrop, makeStyles} from "@material-ui/core"


const useStyles = makeStyles({
    page_content: {
        backgroundColor: theme.palette.backgroundColor,
        position: 'fixed',
        padding: '16px',
        height: '100%',
        width: '100%',
        //left: (props)=>(props.sideDrawerOpen)? 'min(300px,70%)': '0px',
        //transition: '0.3s ease-in',
    },
    backdrop: {
        color: "#fff",
    }
})

const PageContent = props => {
    const classes = useStyles(props);
    const {sideDrawerOpen, toggleSideDrawer} = props

    return (
        <div className={classes.page_content}>
            <Backdrop className={classes.backdrop} open={sideDrawerOpen} onClick={()=>toggleSideDrawer(!sideDrawerOpen)} />
            {props.children}
        </div>
    )
}


export default PageContent;