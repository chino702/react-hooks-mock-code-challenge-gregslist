import React from "react";

function ListingCard({ listing, handleFavorite, handleDelete }) {
  const { id, description, image, location, favorite } = listing;

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${favorite ? "active" : ""}`}
          onClick={() => handleFavorite(id)}
        >
          {favorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
