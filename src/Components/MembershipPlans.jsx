// src/components/MembershipPlans.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MembershipPlans.css';

function MembershipPlans() {
    const navigate = useNavigate();

    const handleSelectPlanClick = (plan) => {
        navigate('/membership-form', { state: { plan } });
    };
     
    return (
        <div className="membership-plans">
            <h2>Membership Plans</h2>
            <div className="plans-container">
                

                {/* 15 Days Plan */}
                <div className="plan-card">
                    <h3>15 Days Plan</h3>
                    <div className="price">₹ 800/-</div>
                    <ul>
                        <li>Access up to 3 books</li>
                        <li>Delivery available (Charges apply)</li>
                        <li>One-time registration fee ₹ 100/-</li>
                    </ul>
                    <button
                        className="select-button"
                        onClick={() => handleSelectPlanClick('15 Days Plan')}
                    >
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MembershipPlans;
