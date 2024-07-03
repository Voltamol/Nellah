import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';

const employees=[
    "Fincheck",
    "Bakertilly",
    "Claxon",
    "Netflix",
    "Google",

];
const Role=()=>{
    return(
        <>
            <Navbar heading="Role" current="role" />
            <SelectField options={employees} title="select employee" />
            <AddGroup placeholder="enter Role name" />
        </>
    )
}

export default Role;