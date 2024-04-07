// import React from "react";
/* 地址
antd-table-editable-master
src/conponents/CellDefault

学习内容： 
     泛型中Record的使用
     约束对象的属性 1是key 2是value
*/

const Test = () => {
  interface Person<NameType, AgeType> {
    name: NameType;
    age: AgeType;
  }
  const jackInfo: Person<string, string> = {
    name: "jack",
    age: "18",
  };
  console.log(jackInfo);
  return (
    <div>
      2learn
      <br />
    </div>
  );
};
export default Test;
