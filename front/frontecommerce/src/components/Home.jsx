import React, { useEffect, useState } from "react";
import { fetchUsers } from "../provider/userProvider";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Esta é a tela inicial do seu aplicativo.</p>
      <h2>Lista de Usuários:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;