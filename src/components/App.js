import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const BASE_URL = "http://localhost:6001";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await fetch(`${BASE_URL}/listings`);
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.log("Error fetching listings:", error);
    }
  };

  const handleFavorite = (id) => {
    const updatedListings = listings.map((listing) => {
      if (listing.id === id) {
        return { ...listing, favorite: !listing.favorite };
      }
      return listing;
    });
    setListings(updatedListings);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/listings/${id}`, { method: "DELETE" });
      const updatedListings = listings.filter((listing) => listing.id !== id);
      setListings(updatedListings);
    } catch (error) {
      console.log("Error deleting listing:", error);
    }
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        listings={listings}
        handleFavorite={handleFavorite}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
