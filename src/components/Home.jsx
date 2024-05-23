import React from "react";
import Card from "./Card";

function Home({ data }) {
  return (
    <div className="bg-[#FFEACF] w-full h-[100vh] flex items-center justify-center">
      <Card data={data} />
    </div>
  );
}

export default Home;
