import React from 'react';
import ProductItem from "./ProductItem";
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";
import {changePage, fetchProducts, filterProducts} from "../store/actions";
import {getProductsToDisplay} from "../selectors/selectors";

class ProductsList extends React.Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	handlePageClick = ({selected}) => {
		this.props.changePage(selected + 1);
	};

	handleFilter = (e) => {
		const {value} = e.target;
		this.props.filterProducts(value, this.props.fullProducts);
	};

	render() {
		const {products, pages} = this.props;
		return (
			<div className='list-content'>
				{
					products.length > 0 &&
					<>
						<input
							type="text"
							placeholder='Filter'
							onChange={this.handleFilter}
							className='filter'
						/>
						<div>
							{
								products.map((item, index) => <ProductItem key={index} {...item}/>)
							}
						</div>

						<ReactPaginate
							pageCount={pages}
							marginPagesDisplayed={1}
							pageRangeDisplayed={1}
							previousLabel={'previous'}
							nextLabel={'next'}
							onPageChange={this.handlePageClick}
							containerClassName={'Pagination'}
							previousClassName={'Previous'}
							nextClassName={'Next'}
							disabledClassName={'Disabled'}
						/>
					</>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		// products: getProductsToDisplay(state.displayProducts.displayedIds, state.products),
		products: displayedProductsSelector(state),
		pages: state.displayProducts.allIds.length / state.displayProducts.itemsOnPage,
		fullProducts: state.products
	}
};

const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(fetchProducts()),
	changePage: pageNumber => dispatch(changePage(pageNumber)),
	filterProducts: (value, products) => dispatch(filterProducts(value, products))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);