import React, { useState, useEffect } from 'react';
import './User.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5002/user/getUser/${id}`)
            .then(result => {
                const { first_name, last_name, email, address } = result.data;
                setFirstName(first_name);
                setLastName(last_name);
                setEmail(email);
                setAddress(address);
            })
            .catch(err => console.error(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5002/user/updateUser/${id}`, {
            first_name,
            last_name,
            email,
            address
        })
        .then(() => {
            alert("User updated successfully!");
            navigate('/about');
        })
        .catch((err) => {
            console.error(err);
            window.alert("Error: Failed to update the user.\nPlease check your input and try again.");
        });
    };

    return (
        <>
            <h1>Update User</h1>
            <div className='container'>
                <form className='formp' onSubmit={Update}>
                    <h2 className='user_topic'>Update User Details</h2>

                    <label className='user_label'>First Name</label><br />
                    <input
                        className='user_input'
                        type='text'
                        name='first_name'
                        placeholder='Enter First Name'
                        required
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />

                    <label className='user_label'>Last Name</label><br />
                    <input
                        className='user_input'
                        type='text'
                        name='last_name'
                        placeholder='Enter Last Name'
                        required
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />

                    <label className='user_label'>Email</label><br />
                    <input
                        className='user_input'
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <label className='user_label'>Address</label><br />
                    <input
                        className='user_input'
                        type='text'
                        name='address'
                        placeholder='Enter Address'
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <br />

                    <button className='user_button' type='submit'>Update</button>
                </form>
            </div>
        </>
    );
}

export default UpdateUser;