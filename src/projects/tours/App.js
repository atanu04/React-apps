import React, { useState, useEffect } from "react";
import Loding from "./Components/Loding";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loding, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loding) {
    return (
      <div>
        <Loding />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="centreitem">
        <h1 className="title">No tour left</h1>
        <button className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
