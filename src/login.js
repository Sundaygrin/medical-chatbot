import  './css/login.css';
import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const bgColor = localStorage.getItem("color");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyInfo = (arg) => {
    toast.info(arg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifySuccess = (arg) => {
    toast.success(arg + username, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = (arg) => {
    toast.error(arg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleLogSubmit = async (event) => {
    event.preventDefault();

    

    if (username !== "" && password !== "") {

        const userData = localStorage.getItem("userdata")
        if (userData) {
            const userDataObj = JSON.parse(userData);
            if (userDataObj.username !== username || userDataObj.password !== password) {
                notifyError("Wrong details.");
                  } else {
                    notifySuccess("Welcome ", username);
                    setTimeout(() => {
                      navigate("/homepage");
                    }, 2000);
                  }
          } else {
            console.log("No user data found in localStorage.");
          }
     
      
    } else {
      notifyInfo("Please fill the form below!");
    }
  };

  return (
    <div className="logMin" style={{ backgroundColor: "#007bff" }}>
      <form action="" className="logform">
        <h1 className="logbime" style={{ color: "#007bff" }}>
          Medik
        </h1>
        <input
          className="logusername"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />  
        <input
          className="logpassword"
          type="password"
          maxLength={8}
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="logbutton"
          type="submit"
          style={{ backgroundColor: "#007bff"}}
          onClick={handleLogSubmit}
        >
          sign in
        </button>
        <ToastContainer />
        <p className="logredir">
          Don't have an account?<a href="/">sign up</a>
        </p>
      </form>
    </div>
  );
};