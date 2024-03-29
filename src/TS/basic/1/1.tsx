/*
 1.typeof
 typeof可以拿到一个定义类型的变量，
 然后 取出它的类型 来使用
*/
interface PersonType {
  name: string;
  age: number;
}
const jack: PersonType = { name: "jack", age: 18 };
console.log(jack);
type Jack = typeof jack;
const rose: Jack = { name: "rose", age: 20 };
console.log(rose);

/*
2. 泛型
 可以给函数一个函数传入一个类型
 然后在其他地方使用
*/
function fn<T, U>(name: T, age: U): T {
  console.log(age);
  return name;
}
fn<string, number>("jack", 18);

/*
 3. keyof

 */
export interface Animal {
  name: string;
  age: number;
}
// type K1 = keyof Animal;
// let cat = K1;
// console.log(cat);
