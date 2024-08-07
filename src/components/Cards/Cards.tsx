import React from "react";
import apartment1 from "../../assets/01.jpg";
import apartment2 from "../../assets/02.jpg";
import apartment3 from "../../assets/03.jpg";
import apartment4 from "../../assets/04.jpg";

const Cards: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="mb-[60px]">
          <h2 className="text-3xl mb-5 font-bold tracking-tighter md:text-5xl lg:text-5xl/none text-golden max-w-[600px]">
            Наши квартиры
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <img src={apartment1} alt="apartment" />
          </div>
          <div>
            <img src={apartment2} alt="apartment" />
          </div>
          <div>
            <img src={apartment3} alt="apartment" />
          </div>
          <div>
            <img src={apartment4} alt="apartment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
