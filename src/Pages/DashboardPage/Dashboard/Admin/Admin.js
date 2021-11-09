import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email }
        fetch('https://tranquil-refuge-23029.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Barier${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true);
                }

            })
    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Standard"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success?.email && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default Admin;