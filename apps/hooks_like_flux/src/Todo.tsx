import React, { FC, useState } from "react";
import { useContext } from "./Flux";

export const Todo: FC = () => {
  const [currentDescription, setCurrentDescription] = useState("");
  const {
    todo: { todos, add, update },
  } = useContext();

  function onAddClick() {
    setCurrentDescription("");
    add(currentDescription);
  }

  return (
    <>
      <ul>
        {todos.map(({ id, description, done }) => (
          <li key={id} className={done ? "done" : ""}>
            {description}
            <input
              type="checkbox"
              checked={done}
              onChange={(e) => update(id, e.target.checked)}
            />
          </li>
        ))}
      </ul>
      <input
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
      />
      <button onClick={onAddClick}>追加</button>
    </>
  );
};
