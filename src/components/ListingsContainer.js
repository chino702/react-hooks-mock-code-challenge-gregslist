import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleFavorite, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            handleFavorite={handleFavorite}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;