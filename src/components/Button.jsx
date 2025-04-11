import React from 'react';
import styled from 'styled-components';

const Button = () => {
return (
    <StyledWrapper>
    <button className="button">
        Apply Now
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
        />
        </svg>
    </button>
    </StyledWrapper>
);
};

const StyledWrapper = styled.div`
width: 100%;

.button {
    width: 100%;
    position: relative;
    padding: 0.75rem 1.5rem;
    background-color: #7f2032; /* maroon red */
    border-radius: 8px;
    color: #1a2639; /* deep navy blue text */
    font-weight: bold;
    font-size: 1rem;
    border: 2px solid #ff568e66;
    box-shadow: 0 0 10px rgba(255, 86, 142, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
    overflow: hidden;
}

.icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.button:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(255, 86, 142, 0.5);
    border-color: #ff568eaa;
}

.button:hover .icon {
    transform: translateX(4px);
}

.button::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 100%;
    background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
}

.button:hover::before {
    animation: shine 1.5s ease-out infinite;
}

@keyframes shine {
    0% {
    left: -100px;
    }
    60% {
    left: 100%;
    }
    to {
    left: 100%;
    }
}
`;

export default Button;
