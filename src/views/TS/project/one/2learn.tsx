import React from "react";
/* 地址
antd-table-editable-master
src/conponents/CellDefault

学习内容： 
     泛型中Record的使用
     Record<string, any> 
     表示一个键为字符串类型 值为任意类型的对象
     const person:  Record<string, any> = {name: 'jack', age: 30}
*/

const Test = () => {
  interface Props<T = any> {
    list: T[];
  }
  function fn<T>(props: Props) {
    console.log(props);
  }
  return (
    <div>
      2learn
      <br />
    </div>
  );
};
export default Test;
