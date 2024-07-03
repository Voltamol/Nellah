import { getData,handleSubmit } from "./functions/handleSubmit";
import SelectField from "./select_field";
const AddGroup=(props)=>{
    const host='http://127.0.0.1:8000/api/company';
    const fields=['department', 'name', 'phone', 'id_num'];
    const references=getData(props.reference);
    return(
        <form className="container" method="post" target="" onSubmit={(e)=>{handleSubmit(host,e,fields)}}>
            <SelectField options={references} title="select company" />
            <br />
            <div className="mb-3 d-flex">
                <input type="email" name={props.name} className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}></input>
            </div>
            <br />
            <button type="submit" className="btn btn-info text-light">Add</button>
        </form>
    );
}

export default AddGroup;
