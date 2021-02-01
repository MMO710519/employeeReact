import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "700px",
        marginTop: "50px",
        margin: "0 auto",
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
}));

export const Register = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("Controlled");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        New Employee
                    </Typography>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="氏名" />
                        <TextField id="outlined-basic" label="メールアドレス" />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                所属部署
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={department}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>営業部</MenuItem>
                                <MenuItem value={2}>開発部</MenuItem>
                                <MenuItem value={3}>総務部</MenuItem>
                                <MenuItem value={4}>人事部</MenuItem>
                                <MenuItem value={5}>管理部</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="standard-multiline-flexible"
                            label="住所"
                            multiline
                            rowsMax={4}
                            // value={address}
                            onChange={handleChange}
                        />
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2021-01-31"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                扶養人数
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={dependents}
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="outlined" color="secondary">
                            登録
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};
