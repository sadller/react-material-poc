const { createMuiTheme } = require("@material-ui/core");


const light = createMuiTheme({
    "palette": {
        "primaryColor": "#304ffe",
        "backgroundColor": "white",
        "textColor": "rgba(0, 0, 0, 0.87)",
        "secondaryTextColor": "rgba(0, 0, 0, 0.54)",
        "borderColor": "#e0e0e0",
        "disabledColor": "rgba(0, 0, 0, 0.36)",
        "shadowColor": "#000000"
    }
})


const dark = createMuiTheme({
    "palette": {
        "primary1Color": "#303030",
        "backgroundColor": "#303030",
        "textColor": "#ffffff",
        "secondaryTextColor": "rgba(255, 255, 255, 0.44)",
        "borderColor": "#e0e0e0",
        "disabledColor": "rgba(255, 214, 0, 0.32)",
        "shadowColor": "#ffffff",
    }
})


const theme = (localStorage.getItem('theme')==="dark")? dark : light;


export default theme