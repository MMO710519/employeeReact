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
                    Employee Data Management System
                </Typography>

                <div className={classes.right}>
                    <Link className={classes.link} to="/about">
                        About
                    </Link>
                    <Link className={classes.link} to="/user">
                        User
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};
