import React, {useState} from "react";

function SignUp(props) {
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("male");

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You signed up with username: ${username} and gender: ${gender}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleChange} />
            </label>
            <br />
            <label>
                Gender:
                <select value={gender} onChange={handleGenderChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );

}

export default SignUp;