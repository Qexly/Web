import React, { Fragment } from 'react';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInStock: false,
            searchValue: '',
        }
    }


    searchOnChangeHandler(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState((state, props) => ({
            [e.target.name]: value,
        }))
    }

    render() {
        let products = this.state.showInStock ? 
        this.props.products.filter((item) => item.stocked) : this.props.products;

        products = products.filter((item) => item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));

        return (
            <div>
                <SearchBar 
                    showInStock={this.state.showInStock} 
                    searchValue={this.state.searchValue}
                    onChange={this.searchOnChangeHandler.bind(this)}
                />
                <ProductTable products={products} showInStock={this.state.showInStock} />
            </div>
        )
    }


}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    formOnChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <div>
                <form onChange={this.formOnChange.bind(this)}>
                    <input value={this.props.searchValue} name="searchValue" type="text" placeholder="Search..." />
                    <br />
                    <label>
                        <input name="showInStock" type="checkbox" checked={this.props.showInStock} />
                        Only show products in stock
                    </label>
                </form>
            </div>
        )
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let category = null;
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {
                    this.props.products.map((item, index, array) => {
                        if (!category || item.category != category) {
                            category = item.category
                            return (
                                <Fragment key={item.name}>
                                    <ProductCategoryRow category={item.category} />
                                    <ProductRow good={item.name} price={item.price} style={!item.stocked ? {color: 'red'} : null} />
                                </Fragment>
                            )
                        } else {
                            return (
                                <ProductRow 
                                    key={item.name}
                                    good={item.name} 
                                    price={item.price} 
                                    style={!item.stocked ? {color: 'red'} : null} 
                                />
                            )
                        }
                    })
                }

            </table>
        )
    }

}

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th colSpan="2">
                    {this.props.category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <tr>
                <td style={this.props.style}>{this.props.good}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default FilterableProductTable;
export {PRODUCTS};