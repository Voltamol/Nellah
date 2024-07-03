
const SelectField=(props)=>{
    const options=Array.from(props.options);
    return(
        <div className="container">
            <div className="mb-3 d-flex">
                <select className="form-select" aria-label="Default select example">
                    <option selected>{props.title}</option>
                    {
                        options.map((item, index) => (<option value={index}>{item}</option>))
                    }
                    
                </select>
            </div>
        </div>
    );
}

export default SelectField;
