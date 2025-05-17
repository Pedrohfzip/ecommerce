import Header from './components/layout/header';
import AppRoutes from './routes/index.routes';

function App() {
  return (
    <>
      <Header /> {/* O Header fixo no topo */}
      <div style={{ marginTop: "80px" }}> {/* Espaço para compensar o header fixo */}
        <AppRoutes /> {/* Renderiza as rotas */}
      </div>
    </>
  );
}

export default App;