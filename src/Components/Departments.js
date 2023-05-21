import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Departments() {


    const [departments, setDepartments] = useState([
        {
          department: 'customer_service',
          sub_departments: [
            { name: 'support', checked: false },
            { name: 'customer_success', checked: false }
          ],
          checked: false
        },
        {
          department: 'design',
          sub_departments: [
            { name: 'graphic_design', checked: false },
            { name: 'product_design', checked: false },
            { name: 'web_design', checked: false }
          ],
          checked: false
        }
      ]);
    
      const handleDepartmentToggle = (index) => {
        const updatedDepartments = [...departments];
        updatedDepartments[index].checked = !updatedDepartments[index].checked;
        updatedDepartments[index].sub_departments.forEach(
          (subDepartment) => (subDepartment.checked = updatedDepartments[index].checked)
        );
        setDepartments(updatedDepartments);
      };
    
      const handleSubDepartmentToggle = (departmentIndex, subDepartmentIndex) => {
        const updatedDepartments = [...departments];
        updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex].checked = !updatedDepartments[departmentIndex]
          .sub_departments[subDepartmentIndex].checked;
        const allSubDepartmentsChecked = updatedDepartments[departmentIndex].sub_departments.every(
          (subDepartment) => subDepartment.checked
        );
        updatedDepartments[departmentIndex].checked = allSubDepartmentsChecked;
        setDepartments(updatedDepartments);
      };
    
    return (
        
        <div>
        {departments.map((department, departmentIndex) => (
          <div key={department.department}>
            <FormControlLabel
              label={department.department}
              control={
                <Checkbox
                  checked={department.checked || false}
                  onChange={() => handleDepartmentToggle(departmentIndex)}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {department.sub_departments.map((subDepartment, subDepartmentIndex) => (
                <FormControlLabel
                  key={subDepartment.name}
                  label={subDepartment.name}
                  control={
                    <Checkbox
                      checked={subDepartment.checked || false}
                      onChange={() => handleSubDepartmentToggle(departmentIndex, subDepartmentIndex)}
                    />
                  }
                />
              ))}
            </Box>
          </div>
        ))}
      </div>
       
    )
}
