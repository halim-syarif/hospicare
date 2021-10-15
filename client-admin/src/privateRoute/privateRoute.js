import { Route, Redirect } from "react-router"

function PrivateRoute({ children, ...rest }) {

  return (
    <Route {...rest}>
      {
        localStorage.getItem('access_token')
        ? children 
        : <Redirect to="/login" />
      }
    </Route>
  )
}

export default PrivateRoute