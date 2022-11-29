import React, { FormEvent, useRef } from "react";
import styles from "./FormTodo.module.scss";

interface iFormTodo {
  handleFormTodoSubmit: (e: FormEvent) => void;
  onChangeTask: (e) => void;
  Task: string;
  onChangeDifficulty: (e) => void;
  Difficulty: number | undefined;
}

export default function FormTodo(props: iFormTodo) {
  const inputTask = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={props.handleFormTodoSubmit} className={styles.form}>
      <h2>What will you do?</h2>
      <label>Task:</label>
      <input
        type="text"
        aria-label="Task"
        autoFocus
        ref={inputTask}
        autoComplete="off"
        onChange={props.onChangeTask}
        value={props.Task}
        required
      />
      <label>Difficulty: (1 - 10)</label>
      <input
        type="number"
        min={1}
        max={10}
        aria-label="Dificulty"
        autoComplete="off"
        onChange={props.onChangeDifficulty}
        value={props.Difficulty}
        required
      />
      <input
        type="submit"
        aria-label="submit"
        onClick={() => inputTask.current && inputTask.current.focus()}
        value="REGISTER"
      />
    </form>
  );
}
