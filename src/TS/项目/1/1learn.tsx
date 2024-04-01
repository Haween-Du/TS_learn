import React from "react";
/*
antd-table-editable-master
src/conponents/CellDefault

*/

// 1. 接口也可以传入泛型
interface Props<T> {
  list: T[];
  children: (item: T, index: number) => React.ReactNode;
}
function List<T>(props: Props<T>) {
  const { list, children } = props;
  return <div>{list.map(children)}</div>;
}
List({ age: 18 });
