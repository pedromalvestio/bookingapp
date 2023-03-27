import { Calendar } from "primereact/calendar";
import Error from "../../../Atoms/Error";

const DatePicker = ({value, setValue, placeholder, validate, error}) => {

    return (
        <div className="col-12 md:col-4">
            <Calendar 
                value={value} 
                onChange={(e) => setValue(e.value)} 
                dateFormat="dd/mm/yy"
                placeholder={placeholder}
                className="w-full"
            />
            <Error validate={validate} value={value} text={error}/>
        </div>
    );
}

export default DatePicker;