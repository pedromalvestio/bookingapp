import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import { HomeContainer, SearchButtons, SearchContainer, SearchFields, SearchHeader } from "./styles";
import AutoComplete from "../../Components/Home/AutoComplete";
import DatePicker from "../../Components/Home/DatePicker";

const Home = () => {
    const [getDeparture, setDeparture] = useState("");
    const [getArrival, setArrival] = useState("");
    const [getDate, setDate] = useState("");
    const [locationList, setLocationList] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(
        'http://localhost:3000/locations').then((response) => {
            setLocationList(Array.from(response.data.map(i => ({location: i}))));
        });
    },[]);

    const searchFligths = () => {
        setSubmitted(true);
        if (getDeparture && getArrival && getDate)
        if (getDeparture.location.trim() && getArrival.location.trim() && getDate.toDateString().trim())
            navigate(`/fligths?departure=${getDeparture.location}&arrival=${getArrival.location}&date=${getDate}`);
    };

    return (
        <HomeContainer>
            <SearchHeader>Search for your flight:</SearchHeader>
            <SearchContainer className="w-full">
                <SearchFields className="formgrid">
                    <AutoComplete 
                        value={getDeparture}
                        completeData={locationList}
                        setValue={setDeparture}
                        field="location"
                        placeholder="Where from?"
                        validate={submitted}
                        error="Please enter a valid city"
                    />
                    <AutoComplete 
                        value={getArrival}
                        completeData={locationList}
                        setValue={setArrival}
                        field="location"
                        placeholder="Where to?"
                        validate={submitted}
                        error="Please enter a valid city"
                    />
                    <DatePicker 
                        value={getDate}
                        setValue={setDate}
                        placeholder="Flight date"
                        validate={submitted}
                        error="Please enter a departure date"
                    />
                </SearchFields>
                <SearchButtons>
                    <Button text="Search" click={() => searchFligths()}/>
                </SearchButtons>
            </SearchContainer>
        </HomeContainer>
    );
};

export default Home;