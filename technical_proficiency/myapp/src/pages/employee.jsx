import EmployeeFields from "./components/employee-fields";
import SelectField from './components/select_field';
import Navbar from './components/navbar';

const departments=[
    "HR",
    "IT",
    "Analytics",
    "Business Development",
    "Graphics"
];
const Employee=()=>{
    return(
        <>
            <Navbar heading="employee" current="employees"/>
            <SelectField options={departments} title="select department" />
            <EmployeeFields entity="Employee"/>
        </>
        
    );
}

export default Employee;