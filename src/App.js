import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LocalTodoPage from "./pages/LocalTodoPage";
import FormPage from "./pages/FormPage";
import OptimizedComponentPage from "./pages/OptimizedComponentPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LocalTodoPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route
          path="/optimizedComponent"
          element={<OptimizedComponentPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
