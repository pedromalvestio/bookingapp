import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DateHandler from "../../Common/DateHandler";
import { Title, Container } from "./styles";
import Itineraries from "../../Components/Flights/Itineraries";

const Fligths = () => {
    const [getItineraries, setItineraries] = useState([]);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const {day, month, year} = DateHandler(searchParams.get('date'));
        axios.get(`http://localhost:3000/itineraries?departureLocation=${searchParams.get('departure')}&arrivalLocation=${searchParams.get('arrival')}&departureYear=${year}&departureMonth=${month}&departureDay=${day}`)
        .then((response) => {
            setItineraries(response.data.sort((a, b) => a.price - b.price))
        });
    },[]);

    return (
        <Container>
            <Title>Fligths from {searchParams.get('departure')} to {searchParams.get('arrival')} - {new Date(searchParams.get('date')).toDateString()}</Title>
            <Itineraries itineraries={getItineraries} />
        </Container>
    );
}

export default Fligths;