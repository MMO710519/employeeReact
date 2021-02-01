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

export const Employee = () => {
    const classes = useStyles();
    const [employees, setEmp] = useState([]);

    useEffect(() => {
        getEmp();
    }, []);

    const getEmp = async () => {
        const response = await axios.get("/api/employee");
        setEmp(response.data.employees);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h1>Employee List</h1>
                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Department</StyledTableCell>
                                <StyledTableCell>Detail</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((employee) => (
                                <StyledTableRow key={employee.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {employee.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {employee.department}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            className={classes.button}
                                        >
                                            <Link
                                                to={`/employee/${employee.id}`}
                                            >
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
