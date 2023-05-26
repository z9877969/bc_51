import {
  BtnRemove,
  Item,
  ItemDate,
  ItemDescr,
  ItemPriority,
  ItemTitle,
} from "./TodoItem.styled";

const TodoItem = ({
  title,
  descr,
  id,
  date,
  priority,
  isDone,
  updateTodoStatus,
  removeTodo,
}) => {
  return (
    <Item a="red" b="green" c="24px">
      {!isDone ? <h2>Hello!</h2> : <p>Good day!</p>}
      <ItemDate isDone={isDone}>{date}</ItemDate>
      <ItemTitle>{title}</ItemTitle>
      <ItemPriority>PRIORITY - {priority}</ItemPriority>
      <ItemDescr>{descr}</ItemDescr>
      <label>
        <input
          type="checkbox"
          name="status"
          onChange={(e) => updateTodoStatus(id)}
          checked={isDone}
        />
        Done
      </label>
      <BtnRemove onClick={(e) => removeTodo(id)}>Remove</BtnRemove>
    </Item>
  );
};

export default TodoItem;
