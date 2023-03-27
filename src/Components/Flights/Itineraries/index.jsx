import { FlightContainer, ItineraryContainer, ItineraryView } from "./styled";
import { Dropdown } from "primereact/dropdown";
import HourMinutes from "../../../Atoms/HourMinutes";
import { useState } from "react";
import Itinerarie from "./Itinerarie";

const Itineraries = ({itineraries}) => {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Time ascending', value: 'departureDate'},
        {label: 'Time descending', value: '!departureDate'},
    ];

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderHeader = () => {
        return (
            <div className="w-full" style={{textAlign: 'right'}}>
                <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Time" onChange={onSortChange}/>
            </div>
        );
    }

    return(
        <ItineraryView
            value={itineraries} 
            layout="list" 
            style={{background: 'transparent'}}
            header={renderHeader()}      
            itemTemplate={Itinerarie} 
            paginator rows={10}
            sortOrder={sortOrder} sortField={sortField} 
        />
    );
}

export default Itineraries;