import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    link: {
        color: "white",
        paddingLeft: "10px",
    },
    right: {
        marginLeft: "auto",
    },
});
export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h6">
                    <Link className={classes.link} to="/">
                        Employee Data Management System
                    </Link>
                </Typography>

                <div className={classes.right}>
                    <Link className={classes.link} to="/user">
                        User
                    </Link>
                    <Link className={classes.link} to="/employee">
                        Employee List
                    </Link>
                    <Link className={classes.link} to="/register">
                        Register
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};
