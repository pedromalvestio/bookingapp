const HourMinutes = ({dateTime}) => {

    const date = new Date(dateTime);
    const hour = date.getUTCHours().toLocaleString("en-US", {minimumIntegerDigits: 2,useGrouping: false});
    const minutes = date.getMinutes().toLocaleString("en-US", {minimumIntegerDigits: 2,useGrouping: false});
    return (
        <div>{hour}:{minutes}</div>
    );
};

export default HourMinutes;