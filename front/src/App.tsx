import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UsersDisplay from "./components/UsersDisplay";
import CommentsDisplay from "./components/CommentsDisplay";
function App() {
  const [users, setUsers] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((users) => {
      let array = [];
      for (let key in users.data) {
        array.push(users.data[key]);
      }
      setUsers([...array]);
    });

    axios.get("http://localhost:8000/api/comments").then((comments) => {
      let arr = [];
      for (let key in comments.data) {
        arr.push(comments.data[key]);
      }
      setComments([...arr]);
    });
  }, []);
  return (
    <div className="App">
      <h1>FREE USERNAMES AND COMMENTS API</h1>
      <section className="users_section">
        <h1 className="section_title">USERS</h1>
        <UsersDisplay users={users} />
      </section>
      <section className="comments_section">
        <h1 className="section_title">COMMENTS</h1>
        <CommentsDisplay comments={comments} />
      </section>
    </div>
  );
}

export default App;
