import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from "./config/routes";
import UserContext from "./context/UserContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

function App() {
  const [user, setUser] = useState({isLoggedIn: false, user: null});


  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
          })}
          <Route
            path="/dashboard"            
            element={user.isLoggedIn ? <Dashboard /> : <Login />}
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
