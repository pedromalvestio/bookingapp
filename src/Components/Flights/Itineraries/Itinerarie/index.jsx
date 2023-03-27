import HourMinutes from "../../../../Atoms/HourMinutes";
import { Carrier, FlightContainer, ItineraryContainer, Price, Time } from "./styled";

const Itinerarie = (data) => {
    return (
        <ItineraryContainer className="w-full">
            <div>
                <Carrier>{data.carrier}</Carrier>
            </div>
            <FlightContainer>
                <div>
                    <p>From</p>
                    <p>{data.departureLocation}</p> 
                    <HourMinutes dateTime={data.departureDate} />
                </div>
                <div>
                    <p>To</p>
                    <p>{data.arrivalLocation}</p> 
                    <HourMinutes dateTime={data.arrivalDate} />
                </div>
                <div>
                    <Price>{data.price+" "+data.currency}</Price> 
                    <p>{"Seats Left: "+data.seatsLeft}</p>
                </div>
            </FlightContainer>
        </ItineraryContainer>
    );
}

export default Itinerarie;