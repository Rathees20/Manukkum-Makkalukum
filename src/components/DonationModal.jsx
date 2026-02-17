import React from "react";
import "./DonationModal.css";

const DonationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="donation-modal-overlay" onClick={onClose}>
            <div className="donation-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Support Our Cause</h2>
                <div className="donation-images">
                    <div className="donation-image-container">
                        <h3>Scan QR Code</h3>
                        <img src="/images/pay1.jpeg" alt="Donation QR Code" />
                    </div>
                    <div className="donation-image-container">
                        <h3>Bank Details</h3>
                        <img src="/images/pay2.jpeg" alt="Bank Account Details" />
                    </div>
                </div>
                <div className="donation-text">
                    <p>Your contribution helps us plant more trees and build climate-resilient communities.</p>
                </div>
            </div>
        </div>
    );
};

export default DonationModal;
