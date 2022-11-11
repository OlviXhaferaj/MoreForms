import React from 'react'

const List = (props) => {
    const {name, lastname, email, password, confirmpassword} =props;
    return (
        <div>
            <h1>Your form data</h1>
            <p>First Name: {name} </p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </div>
    )
}

export default List