import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
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
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
