import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UsersDisplay from "./components/UsersDisplay";
import CommentsDisplay from "./components/CommentsDisplay";
function App() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((users) => {
      let array = [];
      for (let key in users.data) {
        array.push(users.data[key]);
      }
      setUsers([...array]);
    });
  }, []);
  return (
    <div className="App">
      <h1>FREE USERNAMES AND COMMENTS API</h1>
      <section className="users_section">
        <UsersDisplay users={users} />
      </section>
      <section className="comments_section">
        <CommentsDisplay comments={users} />
      </section>
    </div>
  );
}

export default App;
