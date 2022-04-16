import React from "react";
import ListingCard from "./ListingsCard";
import "bootstrap/dist/css/bootstrap.min.css";

const Listings = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <ListingCard />
          </div>
          <div class="col-sm-4">
            <ListingCard />
          </div>
          <div class="col-sm-4">
            <ListingCard />
          </div>
          <div class="col-sm-4">
            <ListingCard />
          </div>
          <div class="col-sm-4">
            <ListingCard />
          </div>
          <div class="col-sm-4">
            <ListingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
