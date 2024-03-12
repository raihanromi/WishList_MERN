import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";

export const backend_url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      {/* <nav className="bg-gray-800">
        <div className="flex gap-10 mx-auto p-2">
          <Link to="/">
            <h2 className="text-white text-2xl font-bold">My WishList</h2>
          </Link>
          <Link to="/create">
            <h2 className="text-white text-2xl font-bold">
              Add to the WishList
            </h2>
          </Link>
          <Link to="/signup">
            <h2 className="text-white text-2xl font-bold">Sign up </h2>
          </Link>
          <Link to="/login">
            <h2 className="text-white text-2xl font-bold">Log in </h2>
          </Link>
        </div>
      </nav> */}
      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={user? <HomePage />: navigate("/login")}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/login"
            element={user?navigate("/"): <LoginPage />}
          ></Route>
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
