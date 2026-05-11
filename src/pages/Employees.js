import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className='container mt-5'>
      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default Employees;