import React from 'react';
import {connect} from "react-redux";
import {selectEditId} from "../store/actions";

const ProductItem = ({id, name, description, thumbnailUrl, url, selectEditId, price}) => {
	return <div className='product-item border-radius'>
		<img className='thumbnail border-radius' src={thumbnailUrl} alt=""/>
		<div>
			<div>{name}</div>
			<div>{description}</div>
		</div>
		<div className='align-self-bottom'>
			<button onClick={() => selectEditId({id, name, description, thumbnailUrl, url, selectEditId, price})}>Edit</button>
		</div>
	</div>
};

const mapDispatchToProps = dispatch => ({
	selectEditId: product => dispatch(selectEditId(product)),
});

export default connect(null, mapDispatchToProps)(ProductItem);