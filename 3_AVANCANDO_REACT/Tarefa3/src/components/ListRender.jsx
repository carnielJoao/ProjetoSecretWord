import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);
    const [user, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} anos
            </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete randow user</button>
    </div>
  );
};

export default ListRender;