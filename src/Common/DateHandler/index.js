const DateHandler = (dateTime) => {

    const date = new Date(dateTime);
    const day = date.getDate().toLocaleString("en-US", {minimumIntegerDigits: 2,useGrouping: false});
    const month = (date.getMonth()).toLocaleString("en-US", {minimumIntegerDigits: 2,useGrouping: false});
    const year = date.getFullYear();
    
    return {
        day,
        month,
        year
    };
};

export default DateHandler;