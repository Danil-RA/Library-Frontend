import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/MembershipForm.css';

function MembershipForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { plan } = location.state || { plan: 'No plan selected' };

    const [userDetails, setUserDetails] = useState({
        email: '',
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        paymentMethod: 'gpayupi',
        currentDate: new Date().toISOString().split('T')[0],
        //currentTime: new Date().toISOString().split('T')[1],
        expiringDate: '',
    });

    useEffect(() => {
        // Fetch user details (mocked with localStorage or API call)
        const fetchUserDetails = async () => {
            try {
                const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
                if (storedDetails) {
                    setUserDetails({
                        email: storedDetails.email || '',
                    });
                    setFormData((prevData) => ({
                        ...prevData,
                        phoneNumber: storedDetails.phoneNumber || '',
                    }));
                } else {
                    const response = await axios.get('http://localhost:3001/user-details');
                    setUserDetails({
                        email: response.data.email || '',
                    });
                    setFormData((prevData) => ({
                        ...prevData,
                        phoneNumber: response.data.phoneNumber || '',
                    }));
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    useEffect(() => {
        const currentDate = new Date(formData.currentDate);
        const tempExpiringDate = new Date(currentDate);

        if (plan === '7 Days Plan') {
            tempExpiringDate.setDate(tempExpiringDate.getDate() + 7);
        } else if (plan === '15 Days Plan') {
            tempExpiringDate.setDate(tempExpiringDate.getDate() + 15);
        }

        setFormData((prevData) => ({
            ...prevData,
            expiringDate: tempExpiringDate.toISOString().split('T')[0],
        }));
    }, [plan, formData.currentDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log({ ...formData, ...userDetails, plan });

            const response = await axios.post('http://localhost:3001/membership-form', {
                ...formData,
                ...userDetails,
                plan
            });
            
            if (response.status === 201) {
                navigate('/membership-card', { state: { formData, plan } });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting the form. Please try again.');
        }
    };

    return (
        <div className="membership-form-page">
            <h2>Membership Form</h2>
            <div className="selected-plan">Selected Plan: {plan}</div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name*:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name*:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Your E-mail*:
                    <input type="email" value={userDetails.email} disabled />
                </label>
                <label>
                    Your Phone Number*:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Your Address*:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <label>
                    Current Date:
                    <input type="text" value={formData.currentDate} readOnly />
                </label>
                <label>
                    Expiring Date:
                    <input type="text" value={formData.expiringDate} readOnly />
                </label>
                <label>
                    I would like to pay by*:
                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="gpayupi">GPay/UPI</option>
                        <option value="cash">Cash</option>
                        <option value="paypal">PayPal</option>
                        <option value="netbanking">Net Banking</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MembershipForm;
