import React, { useEffect, useState } from "react";
import { getEmployees,createEmployee,deleteEmployee } from "../services/employeeService";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const res = await getEmployees();
        setEmployees(res.data);
    };

    const handleAdd = async () => {
        await createEmployee({ name });
        setName("");
        loadEmployees();
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    };

    return (
        <div>
            <h2>Employee CRUD</h2>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {employees.map(emp => (
                    <li key={emp.id}>
                        {emp.name}
                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Employees;