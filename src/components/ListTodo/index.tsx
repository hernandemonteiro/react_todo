import React from "react";
import styles from "./ListTodo.module.scss";

interface iListTodo {
  children: JSX.Element;
}
function ListTodo(props: iListTodo) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className="trH2">
          <h2
            style={{
              padding: "2%",
              width: "100%",
              textAlign: "left",
            }}
          >
            List:
          </h2>
        </tr>
        <tr>
          <th>Task</th>
          <th className={styles.thSmall}>Difficulty</th>
          <th className={styles.thSmall}>Done</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default ListTodo;
