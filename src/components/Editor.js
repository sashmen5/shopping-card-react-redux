import React from 'react';
import {connect} from "react-redux";
import {changeInputValue, saveEditedProduct} from "../store/actions";

class Editor extends React.Component {

	handleInputChange = (e) => {
		this.props.changeInputValue(e.target.name, e.target.value);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const {product} = this.props;
		this.props.saveEditedProduct(product);
	};

	render() {
		const {name, description, url, price} = this.props.product;
		const disableSubmit =  !name || !price || !url;
		return (
			<div className='form-container'>
				<form className='form' onSubmit={this.handleSubmit}>
					<img src={url} alt=""/>

					<label>Name:</label>
					<input type="text" name='name' value={name} onChange={this.handleInputChange}/>

					<label>Description:</label>
					<textarea name="description" id="" cols="30" rows="5" value={description} onChange={this.handleInputChange}/>

					<label>Price:</label>
					<input type="number" min='1' name='price' value={price} onChange={this.handleInputChange}/>

					<input type="submit" disabled={disableSubmit}/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		product: state.formEditReducer.product
	}
};

const mapDispatchToProps = dispatch => ({
	changeInputValue: (key, value) => dispatch(changeInputValue(key, value)),
	saveEditedProduct: (product) => dispatch(saveEditedProduct(product))
});



export default connect(mapStateToProps, mapDispatchToProps)(Editor);