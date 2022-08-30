import React, { useState } from 'react'

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fNError, setFNError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lNError, setLNError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFNError("First name must be at least 2 characters long");
        } else {
            setFNError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLNError("Last name must be at least 2 characters long");
        } else {
            setLNError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters long");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmError("Passwords must match");
        } else {
            setConfirmError("");
        }
    }

    return (
        <div>
            <br />
            <hr />

            <p><u>User Information Form</u></p>

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        fNError ?
                            <p style={{ color: 'red' }}>{fNError}</p> :
                            ''
                    }
                </div>
                <br />
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {
                        lNError ?
                            <p style={{ color: 'red' }}>{lNError}</p> :
                            ''
                    }
                </div>
                <br />
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <br />
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <br />
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfirm} />
                    {
                        confirmError ?
                            <p style={{ color: 'red' }}>{confirmError}</p> :
                            ''
                    }
                </div>
                <br />
                {/* <input type="submit" value="Create User" /> */}
            </form>

            <hr />

            {/* <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p> */}
        </div>
    );
};

export default PersonForm

