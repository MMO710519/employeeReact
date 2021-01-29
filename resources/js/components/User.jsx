import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    button: {
        margin: "8px",
    },
    table: {
        maxWidth: "700px",
        minWidth: "500px",
    },
    root: {
        maxWidth: "700px",
        marginTop: "50px",
        margin: "0 auto",
        textAlign: "center",
    },
});
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const User = () => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    //コンポーネント描写時のみLaravelからユーザ一覧の情報を取得
    useEffect(() => {
        //コンポーネントが描写される時にgetUsers()が実行
        getUsers();
    }, []);
    //axiosで/api/userからユーザ一覧を取得し、setUsersでusersに取得したデータを保存
    const getUsers = async () => {
        const response = await axios.get("/api/user");
        setUsers(response.data.users);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h1>User</h1>
                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Detail</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <StyledTableRow key={user.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {user.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            className={classes.button}
                                        >
                                            <Link to={`/user/${user.id}`}>
                                                詳細
                                            </Link>
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};
