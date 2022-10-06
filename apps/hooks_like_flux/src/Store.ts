import { useState } from "react";

interface Todo {
  description: string;
  done: boolean;
}

interface State {
  todos: Todo[];
}

interface Getters {
  todos: Array<Todo & { id: number }>;
}

interface Actions {
  add(description: string): void;
  update(id: number, done: boolean): void;
}

export type Store = Getters & Actions;

export function useTodo(): Getters & Actions {
  const [state, setState] = useState<State>({ todos: [] });
  const { todos } = state;

  function add(description: string) {
    setState({
      todos: [...todos, { description, done: false }],
    });
  }

  function update(id: number, done: boolean) {
    setState({
      todos: todos.map((it, i) => (i !== id ? it : { ...it, done })),
    });
  }

  return {
    todos: todos.map((it, id) => ({ ...it, id })),
    add,
    update,
  };
}
