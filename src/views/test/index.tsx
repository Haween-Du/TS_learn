import React from "react";
import Test from "../TS/project/one/2learn";

const TestOut: React.FC = () => {
  type Info<nameType> = {
    name: nameType;
    age: number;
  };
  const info: Info<string> = {
    name: "18",
    age: 20,
  };
  console.log(info);

  return (
    <div>
      <div className=" bg-black text-white">
        <br />
        test123
      </div>
      <br />
      <Test />
    </div>
  );
};
export default TestOut;
