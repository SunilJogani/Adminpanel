import { Routes ,Route,Link,Navigate } from "react-router-dom";

const Protected = ({user}) => {
    var token = localStorage.getItem("token")
    if(!token){
        return <Navigate to="/" />;
    }
    return user;
};

export default Protected