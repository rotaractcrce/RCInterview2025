import React from 'react';
import './PostCards.css';

const cardLabels = [
'President',
'Secretary',
'Vice President',
'Joint Secretary',
'Marketing Head',
'Public Relations Head',
'Sergeant At Arms',
'Media Head',
'Treasurer',
'Technical Head'
];

const PostCards = ({ selectedCards, setSelectedCards }) => {
const handleClick = (index) => {
    const label = cardLabels[index];

    if (selectedCards.includes(label)) {
    setSelectedCards(selectedCards.filter((item) => item !== label));
    } else if (selectedCards.length < 3) {
    setSelectedCards([...selectedCards, label]);
    }
};

return (
    <div className="card-wrapper-column">
    <div className="card">
        {cardLabels.map((label, index) => (
        <p
            key={index}
            onClick={() => handleClick(index)}
            className={selectedCards.includes(label) ? 'active' : ''}
        >
            <span>{label}</span>
        </p>
        ))}
    </div>

    {selectedCards.length > 0 && (
        <div className="selected-posts">
        <h3>Posts Selected:</h3>
        <div className="inline-posts">
            {selectedCards.map((label, i) => (
            <span key={i} className="post-chip">{label}</span>
            ))}
        </div>
        </div>
    )}
    </div>
);
};

export default PostCards;
