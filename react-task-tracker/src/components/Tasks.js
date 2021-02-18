import { useState } from "react";
const tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Studying",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "Playing Football",
      day: "Tuesday",
      reminder: false,
    },
    {
      id: 3,
      text: "Watching Movie",
      day: "Saturday",
      reminder: true,
    },
  ]);
};

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
