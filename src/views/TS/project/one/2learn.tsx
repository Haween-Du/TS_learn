import React from "react";
/* 地址
antd-table-editable-master
src/conponents/CellDefault

学习内容： 
     泛型中Record的使用
     Record<string, any> 
     表示一个键为字符串类型 值为任意类型的对象
     const person:  Record<string, any> = {name: 'jack', age: 30}

     1. Partial 所有属性变可选   接收一个泛型
      interface User {
        name?: string;
        age: number;
      }
      type PartialUser = Partial<User>;  将name age 变成可选

     2. Required 所有变成必选 接收一个泛型
      type RequiredUser = Required<User>;

     3. Pick 提取想要的属性  接收两个参数  1.泛型  2.想要提取的key
      type test = Pick<User, "age" | "name">;

     4. Exclude 排除部分属性 接收两个参数  1.泛型  2.想要排除的key
      type test = Exclude<"a" | "b", "a">;

     5. Omit  排除interface的属性 和pick相反
      type test2 = Omit<User, "age">;
*/

type Size = "small" | "big" | "middle";
let size: Size = "small";
console.log(size);

const Test = () => {
  // interface User {
  //   name?: string;
  //   age: number;
  //   hobby: string;
  // }
  // type PartialUser = Partial<User>;
  // type test = Exclude<"a" | "b", "a">;
  // type test2 = Omit<User, "age">;

  return (
    <div>
      2learn
      <br />
    </div>
  );
};
export default Test;
