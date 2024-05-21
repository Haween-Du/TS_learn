//hooks开始
import { useState } from "react";

interface User<NameType, AgeType> {
  name: NameType;
  age?: AgeType;
  job: string;
}
type UserOmit<NameType, AgeType> = Omit<User<NameType, AgeType>, "job">;
type RequiredUser<NameType, AgeType> = Required<User<NameType, AgeType>>;

type valueType = "read" | "reading" | "readed";
const LearnTwo1 = () => {
  const [value, setValue] = useState<valueType>("read");
  function fn() {
    if (value === "read") {
      setValue("readed");
    }
    setValue(value);
  }
  const info: UserOmit<string, number> = {
    name: "jack",
    age: 20,
  };

  console.log(info);
  const info2: RequiredUser<string, number> = {
    name: "jack",
    age: 20,
    job: "worker",
  };
  console.log(info2);

  const info3 = {
    name: "jack",
    age: 20,
    job: "worker",
  } as RequiredUser<string, number>;
  console.log(info3);
  
  

  return (
    <>
      LearnTwo1
      <button onClick={() => fn()}>改变value</button>
      <br />
      {value}
    </>
  );
};
export default LearnTwo1;
