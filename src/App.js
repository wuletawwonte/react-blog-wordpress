import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import routes from "./config/routes";
import UserContext from "./context/UserContext";
import Template from "./templates/Template";

function App() {
  const [user, setUser] = useState({isLoggedIn: false, user: null, token: null, avatar: null});


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
            element={user.isLoggedIn ? <Template /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
