import React from 'react';
import ProductsList from "./ProductsList";
import Editor from "./Editor";

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<ProductsList/>
				<Editor/>
			</div>

		)
	}
}

export default Content;