import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        department: '',
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!employee.name || !employee.email || !employee.department) {
            alert('Please fill all fields');
            return;
        }

        addEmployee(employee);

        setEmployee({
            name: '',
            email: '',
            department: '',
        });
    };

    return (
        <div className='card shadow p-4 mb-4'>
            <h3 className='mb-4'>Add Employee</h3>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        name='name'
                        value={employee.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        name='email'
                        value={employee.email}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;