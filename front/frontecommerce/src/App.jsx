import Header from './components/layout/header';
import AppRoutes from './routes/index.routes';
import  { Router, BrowserRouter }  from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header /> {/* O Header fixo no topo */}
      <div style={{ marginTop: "80px" }}> {/* Espaço para compensar o header fixo */}
        <AppRoutes /> {/* Renderiza as rotas */}
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;