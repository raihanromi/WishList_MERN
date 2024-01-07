import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backend_url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="flex gap-10 mx-auto p-2">
          <Link to="/">
            <h2 className="text-white text-2xl font-bold">React Crud</h2>
          </Link>
          <Link to="/create">
            <h2 className="text-white text-2xl font-bold">Create Product</h2>
          </Link>
          <Link to="/signup">
            <h2 className="text-white text-2xl font-bold">Sign up </h2>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
      <Routes>
        <Route path="/signup" element={<SignupPage/>}></Route>
        </Routes>
      <ToastContainer />
    </div>
  );
};



export default App;
