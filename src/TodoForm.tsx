import { Todo } from "./App";
import { useState, useRef, useEffect } from "react";

interface Props {
  onSubmit: (newTodo: Todo) => void; //creare/update
  payload?: Todo;
  onCancel?: () => void;
}

const TodoForm = ({ onSubmit, onCancel, payload }: Props) => {
  const [todo, setTodo] = useState<Todo>(
    payload ?? {
      id: "",
      text: "",
    }
  );

  const ref = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.focus();
    }, 300);
  }, []);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(
          payload ? todo : { ...todo, id: todo.text + todo.text.length }
        );
        setTodo({ text: "", id: "" });
        ref.current?.focus();
      }}
    >
      <input
        type="text"
        value={todo.text}
        onChange={(e) => setTodo((prev) => ({ ...prev, text: e.target.value }))}
        ref={ref}
      />
      <button>{payload ? "수정" : "삭제"}</button>
      {payload && (
        <button type="button" onClick={onCancel}>
          추가
        </button>
      )}
    </form>
  );
};

export default TodoForm;
