import React, { HTMLAttributes } from "react";

interface Learn1Props extends HTMLAttributes<HTMLDListElement> {}

const Learn1: React.FC<Learn1Props> = (props) => {
  console.log(props);
  return (
    <>
      Learn1
      <br />
    </>
  );
};
export default Learn1;
