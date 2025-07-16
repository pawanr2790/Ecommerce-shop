import React from "react";
import Hero from "../components/hero/Hero";
import LatestCollections from "../components/latest-collections/LatestCollections";
import BestSeller from "../components/best-seller/BestSeller";
import Policy from "../components/policies/Policy";
import SubscribeSection from "../components/subscribe/SubscribeSection ";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Policy />
      <SubscribeSection />
    </div>
  );
};

export default Home;
