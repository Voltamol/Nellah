import MultiInput from "./components/multi-input";
import Navbar from './components/navbar';

const Duty=()=>{
    return(
        <>
            <Navbar heading="duty" current="duty" />
            <MultiInput entity="Duty" field1="duty_name" field2="description"/>
        </>
        
    );
}

export default Duty;