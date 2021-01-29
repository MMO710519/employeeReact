import React, { useEffect, useState } from "react";
import axios from "axios";

export const EmployeeDetail = (props) => {
    const [employee, setEmp] = useState([]);

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
        <>
            <h1>Detail</h1>
            <p>{employee.id}</p>
            <p>{employee.name}</p>
            <p>{employee.email}</p>
            <p>{employee.department}</p>
            <p>{employee.birth}</p>
            <p>{employee.address}</p>
            <p>{employee.dependents}</p>
        </>
    );
};
