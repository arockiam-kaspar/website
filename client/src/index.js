import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./router/Routes";
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={Routes} />
		</BrowserRouter>
	</Provider>,
 document.getElementById('root')
);
registerServiceWorker();
