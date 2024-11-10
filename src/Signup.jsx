import UserContext from "./UserContext";
import { useState, useContext } from "react";

function Signup() {
    const [formdata, setFormdata] = useState({
        name: "",
        password: ""
    });

    const { User, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }));
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        setUser(formdata);
    };

    console.log(formdata);
    console.log( "useris ",User);

    return (
        <>
            <div style={{
                display: "flex", flexDirection: "column",
                gap: "10px", border: "1px solid black",
                margin: "10px 10px 10px 10px", padding: "30px 10px"
            }}>
                <label>Username</label>
                <input
                    type="text"
                    name="name"
                    placeholder="username"
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleOnClick}>Signup/Login</button>
        </>
    );
}

export default Signup;
