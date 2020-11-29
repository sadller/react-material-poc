import { lazy, Suspense, useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import PageContent from "./components/shared/PageContent";
import LazyLoading from "./components/shared/LazyLoading";

const Home = lazy(()=>import("./components/home/Home"));
const ContactUs = lazy(()=>import("./components/contact/ContactUs"));

const useStyles = makeStyles({
    app: {
      textAlign: 'center',
      fontFamily: "'Roboto', 'sans-serif'",
    }
})



function App() {
    const [sideDrawerOpen,toggleSideDrawer] = useState(false);
    const classes = useStyles()

    return (
        <div className={classes.app}>
            <CssBaseline/>
            <BrowserRouter>
                <Header sideDrawerOpen={sideDrawerOpen} toggleSideDrawer={toggleSideDrawer} />
                <Sidebar sideDrawerOpen={sideDrawerOpen} toggleSideDrawer={toggleSideDrawer} />
                <PageContent sideDrawerOpen={sideDrawerOpen} toggleSideDrawer={toggleSideDrawer} >
                    <Suspense fallback={LazyLoading}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/contact-us" component={ContactUs} />
                        </Switch>
                    </Suspense>
                </PageContent>
            </BrowserRouter>
        </div>
      );
}

export default App;
