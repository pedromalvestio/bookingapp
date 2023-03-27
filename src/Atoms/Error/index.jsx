const Error = ({validate, value, text}) => 
    validate && !value && <small className="p-error">{text}</small>;

export default Error;