import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

export default function ProtectedRoute({ component: Component , ...rest}) {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Route {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Dashboard />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    />
  );
}
