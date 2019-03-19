import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './store';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header title='Header!'/>
					<Content/>
				</div>
			</Provider>
		);
	}
}

export default App;
