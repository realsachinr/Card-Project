import Home from "./components/Home";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(null);
  const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data.results[0]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <Home data={data} />
    </div>
  );
}

export default App;
