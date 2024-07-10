import React from "react";
import Accordion from "./Accordion";

const Question = () => {
  const answer =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.";
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h1 className="text-center font-bold">Accordion</h1>
      <Accordion title="Section 1" answer={answer} />
      <Accordion title="Section 2" answer={answer} />
      <Accordion title="Section 3" answer={answer} />
    </div>
  );
};

export default Question;
