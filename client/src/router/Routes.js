import React from "react";
import { Route, Switch } from "react-router-dom";
import decode from "jwt-decode";
import TopNav from "../components/TopNav";
import Home from "../components/Home";
import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";
import DashboardPage from "../components/pages/DashboardPage";
import Error from "../components/Error";
import UserRoute from "./UserRoute";
import { userLoggedIn } from "../actions/auth";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import store from "../store";

if(localStorage.loggedInJWT){
	const payload = decode(localStorage.loggedInJWT);
	const user = {
		token: localStorage.loggedInJWT,
		email: payload.email,
		confirmed: payload.confirmed
	  };
	  setAuthorizationHeader(localStorage.loggedInJWT);
	  store.dispatch(userLoggedIn(user));
}

const Routes = ({ location }) =>{
	return(
		<div>
			<TopNav />
			<Switch>
				<Route location={location} path="/" exact component={Home} />
				<Route location={location} path="/signup" exact component={SignupPage} />
				<Route location={location} path="/login" exact component={LoginPage} />
				<UserRoute location={location} path="/dashboard" exact component={DashboardPage}/>
				<Route component={Error} />
			</Switch>
		</div>
	);
};
export default Routes;