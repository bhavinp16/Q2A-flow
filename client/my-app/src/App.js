import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthState from './Context/auth/AuthState';

function App() {
	return (
		<>
			<AuthState>
				<Router>
					<Switch>
						<Route exact path="/" />
						<Route path="/app" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} /> 
					</Switch>
				</Router>
			</AuthState>
		</>
	);
}

export default App