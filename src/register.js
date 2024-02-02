import { useState } from 'react';
import  './css/register.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';




export const Registration = () => {
    const navigate = useNavigate();
  const bgColor = localStorage.getItem("color");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




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



  const notifyRedir = (arg) => {
    toast.info(arg, {
      position: "top-center",
      autoClose:5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const notifySuccess = (arg) => {
    toast.success(arg, {
      position: "top-center",
      autoClose: 2000,
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

  const handleSubmit = async (event) => {  
    event.preventDefault();

    let item = {
      username,
      email,
      password,
    };

    
    if (username !== "" && email !== "" && password !== "") {
      

        if (username == "" || email == "" || password == "") {
          notifyError("Register failed try login.");
        } else {
          notifySuccess("Registration Successful.");
          localStorage.setItem('userdata', JSON.stringify(item))
          const data = localStorage.getItem('userdata')
          console.log("see data: ",data);
          setTimeout(()=>{
            notifyRedir('welcome to medik');
            navigate('/homepage')
          }, 2000);
          
        }
    } else {
      notifyInfo("Please fill the form below!");
    }
    
  };

  return (
    <div className="regMain" id="reg" style={{ backgroundColor: "#007bff"}}>
      <form onSubmit={handleSubmit} action="" className="regform">
        <h1 className="regbime" style={{ color: "#007bff"}}>
          {" "}
          Medik.{" "}
        </h1>
        <input
          className="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="email"
          type="email"
          placeholder="youremail@...com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          
        />
        <input
          className="password"
          type="password"
          maxLength={8}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          // pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'  
        />
        <button
          className="signupbutton"
          style={{ backgroundColor: '#007bff' }}
          type="submit"
        >
          sign up
        </button>
        <ToastContainer />
        <p className="regredir">
          Already have an account? <a href="/login">login</a>
        </p>
      </form>
    </div>
  );
};