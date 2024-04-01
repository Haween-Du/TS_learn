import React from "react";
/* 地址
antd-table-editable-master
src/conponents/CellDefault

学习内容： 
     接口可以传入泛型
*/

const Test = () => {
  //   interface Props<T> {
  //     list: T[];
  //     children: (item: T, index: number) => React.ReactNode;
  //   }

  //   function fn<T>(props: Props<T>) {
  //     const { list, children } = props;
  //     return <div>{list.map(children)}</div>;
  //   }
  interface Props<T> {
    list: T[];
    children: React.ReactNode;
  }
  function fn<T>(props: Props<T>) {
    const { list, children } = props;
    return list.map((item) => (
      <div>
        {children} {item}
      </div>
    ));
  }
  return (
    <div>
      test
      {fn<string>({ list: ["jack", "rose"], children: <div>6666</div> })}
      <br />
    </div>
  );
};
export default Test;
