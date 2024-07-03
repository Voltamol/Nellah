import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';

const companies=[
    "Fincheck",
    "Bakertilly",
    "Claxon",
    "Netflix",
    "Google",

];
const Contact=()=>{
    return(
        <>
            <Navbar heading="contact" current="contacts"  />
            <SelectField options={companies} title="select company" />
            <AddGroup placeholder="enter employee name" />
        </>
    )
}

export default Contact;