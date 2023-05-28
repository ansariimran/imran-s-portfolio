import React, { useState, useEffect } from "react";


function Hero() {
  
  const [list, setList] = useState(["Web Developer", "TRANSLATOR", "BPO Quality Analyst"]);
  const [currentItem, setCurrentItem] = useState(list[0]);

  useEffect(() => {
      const intervalId = setInterval(() => {
      const currentIndex = list.indexOf(currentItem);
      const nextIndex = (currentIndex + 1) % list.length;
      setCurrentItem(list[nextIndex]);
      setList(["Web Developer", "Translator", "BPO Quality Analyst"]);
    }, 6000);

    return () => clearInterval(intervalId);
      }, [currentItem, list]);

    return (
      <section className="hero">
        <div className="container">
          <div className="computer">
            <h1 className="typing-text">
              <span>Hello, I'm a {currentItem}.</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;