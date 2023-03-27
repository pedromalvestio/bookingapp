import { AutoComplete as PrimeAutoComplete } from "primereact/autocomplete";
import { useState } from "react";
import Error from "../../../Atoms/Error";

const AutoComplete = ({value, setValue, completeData, field, placeholder, validate, error}) => {
    const [sugestions, setSugestions] = useState(null)
    const searchSuggestion = (event) => {
        let _filteredLocation;
        if (!event.query.trim().length) {
            _filteredLocation = completeData;
        }
        else {
            _filteredLocation = completeData.filter((item) => {
                return item[field].toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
        setSugestions(_filteredLocation);
    }

    return(
        <div className="col-12 md:col-4">
            <PrimeAutoComplete 
                forceSelection
                value={value} 
                suggestions={sugestions} 
                completeMethod={searchSuggestion}
                onChange={(e) => setValue(e.value)}
                field={field}
                placeholder={placeholder}
                className="w-full"
                inputClassName="w-full"
            />
            <Error 
                validate={validate} 
                value={value}
                text={error}
            /> 
        </div>
    );
}

export default AutoComplete;