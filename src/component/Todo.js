import React from "react";
import style from "./todo.module.css";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <button className={style.btn}>
        <i
          className="fa fa-trash fa-2x"
          onClick={() => {
            handleClick(id);
          }}
        ></i>
      </button>
    </article>
  );
};

export default Todo;
