function Test() {
  interface IPerson<T1 = string, T2 extends string = any> {
    name: T1;
    age: T2;
  }

  const p: IPerson = {
    name: "于文文",
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
