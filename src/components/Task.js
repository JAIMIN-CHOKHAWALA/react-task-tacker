import { FaTimes } from "react-icons/fa";

const Task = ({ task, ondelete, ontoggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => ontoggle(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes
          style={{ color: "red", cursor: "pointer", border: "1px solid red" }}
          onClick={() => ondelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
