import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import axios from "axios";

export const UserDetail = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        console.log(props.match);
        const response = await axios.get(`/api/user/${props.match.params.id}`);
        setUser(response.data.user);
    };
    return (
        <>
            <h1>Detail</h1>

            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    );
};
