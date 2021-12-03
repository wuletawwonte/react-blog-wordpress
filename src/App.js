import { useWuletaw } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import routes from "./config/routes";
import UserContext from "./context/UserContext";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [user, setUser] = useState({isLoggedIn: false, user: null, token: null});


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
            element={user.isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
