import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import FormTodo from "../../components/FormTodo";
import ListTodo from "../../components/ListTodo";

function Home() {
  const [list, setList] = useState<
    [{ task: string; difficulty: number }] | [{}]
  >([{}]);

  const [task, setTask] = useState("");
  const [difficulty, setDifficulty] = useState<number>(0);
  function getTodoLocalStorage() {
    return JSON.parse(localStorage.getItem("listTodo") || "[]");
  }
  useEffect(() => {
    const listTodo: [{ task: string; difficulty: number }] =
      getTodoLocalStorage();
    listTodo && setList(listTodo);
  }, []);

  function setListAndLocalStorage(list) {
    setList(list);
    localStorage.setItem("listTodo", JSON.stringify(list));
    setTask("");
    setDifficulty(0);
  }

  function removeItemList(index) {
    const listTodo = getTodoLocalStorage();
    index != 0 && listTodo > 1
      ? listTodo.splice(index, index)
      : listTodo.splice(index, 1);
    return listTodo;
  }

  function handleFormTodoSubmit(e) {
    e.preventDefault();
    const listTodo: [{ task: string; difficulty: number }] =
      getTodoLocalStorage();
    listTodo.push({
      task: task,
      difficulty: difficulty,
    });
    setListAndLocalStorage(listTodo);
  }

  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <Content>
        <>
          <FormTodo
            handleFormTodoSubmit={handleFormTodoSubmit}
            onChangeTask={(e) => setTask(e.target.value)}
            Task={task}
            onChangeDifficulty={(e) => setDifficulty(e.target.value)}
            Difficulty={difficulty}
          />
          {list.length > 0 && (
            <ListTodo>
              <>
                {list.map((element, index: number) => (
                  <tr key={index}>
                    <td>{element.task}</td>
                    <td>{element.difficulty}</td>
                    <td
                      style={{
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        onClick={() => {
                          const listTodo = removeItemList(index);
                          setListAndLocalStorage(listTodo);
                        }}
                      >
                        Remove
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            </ListTodo>
          )}
        </>
      </Content>
      <Footer />
    </div>
  );
}

export default Home;
