import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    lazy_loading: {
        position: "fixed",
        top: "50%",
        left: "50%",
    }
})

const LazyLoading = props => {
    const classes = useStyles();
    
    return (
        <div>
            Loading...
        </div>
    )
}

export default LazyLoading;