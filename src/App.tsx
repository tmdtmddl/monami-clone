// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState<string>("");
//   // const [number, setNumber] = useState<number>(0);
//   return (
//     <div>
//       <h1>App</h1>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />

//       <Item text={"fdlhjfls"} />
//     </div>
//   );
// };

// export default App;

// // const Item = ({ text }: { text: string }) => {
// //   return <p>{text}</p>;
// // };

// //변수를 선언할때 타입을 주는 방법
// //변수 오른편에 : 쓰고 타입을 적어주면됨
// //예시)const isPerson: boolean = false;

// //props-drilling 값에 타입 주는 법
// //오브젝트에서 바로 값을 꺼내오는 것을  de-structure
// //{}오른편에 :{값들을 지정해서 :타입지정}

import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export interface Todo {
  text: string;
  id: string;
}
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Learn React in Typesxript", id: "123" },
  ]);
  return (
    <div>
      <h1>App</h1>
      <TodoForm
        onSubmit={(newTodo) => {
          setTodos((prev) => [newTodo, ...prev]);
          alert("추가됨");
        }}
      />
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              payload={todo}
              index={index}
              onDelete={() => {
                setTodos((prev) => prev.filter((item) => item.id !== todo.id));
                alert("삭제됨");
              }}
              onUpdate={(newTodo) => {
                setTodos((prev) =>
                  prev.map((item) => (item.id === newTodo.id ? newTodo : item))
                );
                alert("수정됨");
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
