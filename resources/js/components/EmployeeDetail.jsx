import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: "700px",
        marginTop: "50px",
        margin: "0 auto",
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
});

export const EmployeeDetail = (props) => {
    const [employee, setEmp] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getEmp();
    }, []);

    const getEmp = async () => {
        const response = await axios.get(
            `/api/employee/${props.match.params.id}`
        );
        setEmp(response.data.employee);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Detail
                </Typography>
                <p>従業員ID：{employee.id}</p>
                <p>氏名：{employee.name}</p>
                <p>メールアドレス：{employee.email}</p>
                <p>所属部署：{employee.department}</p>
                <p>誕生日：{employee.birth}</p>
                <p>住所：{employee.address}</p>
                <p>扶養人数：{employee.dependents}人</p>
                <Link to="/employee">一覧に戻る</Link>
            </CardContent>
        </Card>
    );
};
