// import React from "react";
/* 地址
antd-table-editable-master
src/conponents/CellDefault

学习内容： 
     泛型中Record的使用
     约束对象的属性 1是key 2是value
*/

const Test = () => {
  type Key = "age" | "name";
  type Value = undefined | 20;
  //key必须全部都有  value就无所谓i
  const obj: Record<Key, Value> = {
    age: 20,
    name: undefined,
  };
  console.log(obj);

  return (
    <div>
      2learn
      <br />
    </div>
  );
};
export default Test;
