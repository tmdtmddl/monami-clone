const n: string = "ldsjfls";
const n1: string = "ldsjfls";
const n2: string = "ldsjfls";
const n3: string = "ldsjfls";
const n4: string = "ldsjfls";

const d: number = 3;
const d1: number = 3;
const d2: number = 3;
const d3: number = 3;
const d4: number = 3;

const b: boolean = true;
const b1: boolean = false;
const b2: boolean = true;
const b3: boolean = true;
const b4: boolean = true;

//강력한 타입 주는법
//변수 또는 props-drilling의 값 오른편에 :을 쓰고 타입을 줄때 값을 지정해주면됨
//정해준값이외에는 다른 값을 쓸수없게됨.

const a: "a" = "b";
const b: 0 = 3;
const c: true = false;

//여러타입을 지정하고 싶을 때 | 기호로 구분하여 추가
const app: "Super App" | "star App" | "Fun App" = "Super App";

//많은타입을 변수처럼 담아서 저장하고 사용할수있음
//type interface
//type 사용법 type을 쓰고 오른편에 타입의 이름을 정해주면 됨
//ts 작명법은 무조건 대문자로시작, 캐멀케이스
//내보내기도 가능함
export type AppTitle = "Super App" | "star App" | "Fun App";
const appTitle: AppTitle = "Super App";
//객체처럼 하나의 타입에 많은 속성/값들이 주어져 있을 때  = 을 쓰지 않고 바로{}안에서 값과타입을 정해줌

interface Person {
  name: string;
  age: number;
}
// const person: { name: string; age: number } = {
//   name: "",
//   age: 3,
// };
const p2: Person = {
  name: "",
  age: 3,
};

type p = {
  name: string;
  age: number;
};

//함수에서 타입지정하기
//인자값, return값을 지정할 수 있음
//()와 => 사이에 :을 쓰고  타입을 정하면 함수의 return값의 타입을 지정할 수 있음
//()안에도 각각의 인자값에도 :을 써서 타입을 지정가능

const fn = (n1: number, n2: number): string => {
  return "";
};

//함수자체도 타입으로 만들수 있음
//()=>return 하는 값이 있으면 타입을 적고 return하는 값이 없을때는 void적어주면 됨
type Fn1 = () => void;
type Fn2 = () => string;

const fn1 = () => console.log("test");
const fn2 = (): string => "t;sjdl;";

interface Compenent {
  fn1: Fn1;
  fn2: Fn2;
}

const Compoenent2 = ({ fn1, fn2 }: Compoenent) => {
  return;
};
