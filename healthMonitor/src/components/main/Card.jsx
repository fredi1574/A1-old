import React from "react";

const Card = () => {
  const cardName = "Water intake";

  return (
    <div className="w-[35%] h-[30%] bg-[#569e5c] m-4 p-4 rounded-2xl text-4xl">
      {cardName}
      <img src="src\assets\water.png" alt="water" className="w-2/5 h-2/5" />
    </div>
  );
};

export default Card;
