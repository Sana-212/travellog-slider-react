import "./App.css";
import Navbar from "./Navbar/Navbar";
import { data } from "./travelData";
import { LeftArrow, RightArrow } from "./Icons";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = location.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, location]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="container">
      <Navbar />

      <div>
        {location.map((item, locationIndex) => {
          let position = "nextSlide";

          if (index === locationIndex) {
            position = "activeSlide";
          }

          if (
            locationIndex === index - 1 ||
            (index === 0 && locationIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={locationIndex} className={position}>
              <div className="slide-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.country}
                  className="slide-image"
                />
                <div className="slide-content">
                  <h2>{item.country}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="slide-buttons">
                  <button
                    className="arrow-btn"
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                  >
                    <LeftArrow />
                  </button>
                  <button
                    className="arrow-btn"
                    onClick={() => {
                      setIndex(index + 1);
                    }}
                  >
                    <RightArrow />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
