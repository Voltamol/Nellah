import EmployeeFields from "./components/employee-fields";
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';
const Employee=()=>{
    const host='http://127.0.0.1:8000/api/company';
    const fields=['department', 'name', 'phone', 'id_num'];
    const references=getData('employees');
    return(
        <>
            <Navbar heading="employee" current="employees"/>
            <form method="post" action="" >
                <SelectField options={references} title="select department" />
                <EmployeeFields entity="Employee"/>
            </form>
            
        </>
        
    );
}

export default Employee;