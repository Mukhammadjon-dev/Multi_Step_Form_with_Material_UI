import UserForm from "./components/UserForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container text-center w-75">
      <ToastContainer />
      <UserForm />
    </div>
  );
}

export default App;
