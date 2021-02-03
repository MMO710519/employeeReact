import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    TextField,
    Button,
    MenuItem,
    InputLabel,
    Typography,
    FormControl,
    Select,
    CardContent,
    Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "500px",
        marginTop: "50px",
        margin: "0 auto",
    },
    form: {
        "& > *": {
            margin: theme.spacing(1),
            width: "40ch",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
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
    back: {
        textAlign: "center",
        paddingTop: "20px",
    },
}));

const defaultValues = {
    department: "",
    input: "",
};

export const Register = () => {
    const classes = useStyles();
    const [value, setValue] = useState("Controlled");
    const { register, handleSubmit, errors, reset, watch, control } = useForm({
        defaultValues,
    });
    const onSubmit = (data) => console.log(data);
    console.log(errors);
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
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            id="outlined-basic"
                            label="氏名"
                            fullWidth
                            type="text"
                            name="name"
                            margin="normal"
                            inputRef={register({
                                required: true,
                                maxLength: 10,
                            })}
                            error={Boolean(errors.name)}
                            helperText={
                                errors.name && "氏名は10文字以内にして下さい"
                            }
                        />
                        <TextField
                            id="outlined-basic"
                            inputRef={register({
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            name="email"
                            type="email"
                            label="メールアドレス"
                            error={Boolean(errors.email)}
                            helperText={
                                errors.email && "メールの形式で入力してください"
                            }
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="department">所属部署</InputLabel>
                            <Controller
                                control={control}
                                name="department"
                                as={
                                    <Select
                                        labelId="department"
                                        id="department"
                                        // value={department}
                                        onChange={handleChange}
                                        inputRef={register({
                                            required: true,
                                        })}
                                    >
                                        <MenuItem value={1}>営業部</MenuItem>
                                        <MenuItem value={2}>開発部</MenuItem>
                                        <MenuItem value={3}>総務部</MenuItem>
                                        <MenuItem value={4}>人事部</MenuItem>
                                        <MenuItem value={5}>管理部</MenuItem>
                                    </Select>
                                }
                                error={Boolean(errors.department)}
                                helperText={
                                    errors.department &&
                                    "メールの形式で入力してください"
                                }
                            />
                        </FormControl>
                        <TextField
                            id="standard-multiline-flexible"
                            label="住所"
                            name="address"
                            type="text"
                            multiline
                            rowsMax={4}
                            // value={address}
                            inputRef={register({
                                required: true,
                            })}
                            error={Boolean(errors.address)}
                            helperText={
                                errors.address && "住所を入力してください"
                            }
                            onChange={handleChange}
                        />
                        <TextField
                            id="date"
                            label="生年月日"
                            name="birthday"
                            type="date"
                            defaultValue="2021-01-31"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            inputRef={register({
                                required: true,
                                pattern: /\d{1,4}/i,
                            })}
                            name="dependents"
                            type="text"
                            label="扶養人数"
                            error={Boolean(errors.dependents)}
                            helperText={
                                errors.dependents &&
                                "扶養人数を半角数字で入力してください"
                            }
                        />
                        <Button
                            variant="outlined"
                            type="submit"
                            color="secondary"
                        >
                            登録
                        </Button>
                        <Button
                            variant="outlined"
                            type="button"
                            color="primary"
                            onClick={() => reset({ defaultValues })}
                        >
                            リセット
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <div className={classes.back}>
                <Link to="/">TOPに戻る</Link>
            </div>
        </>
    );
};
