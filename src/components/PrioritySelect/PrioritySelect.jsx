import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/todo/todoSlice";

const selectStyles = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontSize: "24px",
  marginTop: "12px",
  marginBottom: "12px",
};

const PrioritySelect = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);
  return (
    <select
      name="priority"
      style={selectStyles}
      onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
      value={filter}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default PrioritySelect;
