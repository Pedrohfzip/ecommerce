import React from "react";
import Header from "./layout/header";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}> {/* Espaço para compensar o header fixo */}
        {/* Conteúdo da página */}
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Esta é a tela inicial do seu aplicativo.</p>
      </div>
    </>
  );
};

export default Home;
