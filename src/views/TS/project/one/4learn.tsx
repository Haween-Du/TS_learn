/* 地址
antd-table-editable-master
src/conponents/EditorCell

学习内容： 
     extends继承 可以传入默认值
*/

function Test() {
  // 迷惑
  interface IPerson<T1 = string, T2 extends Record<string, any> = any> {
    name: T1;
    age: T2;
  }

  const p: IPerson = {
    name: "jack",
    age: 50,
  };
  console.log(p);

  return (
    <div>
      test
      <br />
    </div>
  );
}
export default Test;
