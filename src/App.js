import "./App.css";
import HomePge from "./Homepge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./register";
import { Login } from "./login";
import AppointmentScheduler from "./Schedule";
import Reminder from "./Reminder";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/homepage" element={<HomePge/>} />
          <Route path="/" element={<Registration/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/schedule" element={<AppointmentScheduler/>} />
          <Route path = "/reminder" element={<Reminder/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
