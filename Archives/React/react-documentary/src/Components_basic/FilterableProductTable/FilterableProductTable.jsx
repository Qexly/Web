import React from 'react';
/*
class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class ProductCategoryRow extends React.Component { 
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
*/

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];


// Моя попытка c нуля
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.onSearchBarChange = this.onSearchBarChange.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    }

    onSearchBarChange(e) {
        this.setState((state) => {
            return {filterText: e.target.value};
        })
    }

    onCheckBoxChange(e) {
        this.setState((state) => {
            return {inStockOnly: !state.inStockOnly};
        })
    }

    render() {
        return (
            <div>
                <SearchBar 
                    value={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly} 
                    onChangeInput={this.onSearchBarChange} 
                    onChangeCheck={this.onCheckBoxChange}
                />
                <ProductTable products={this.props.products} searchBy={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        )
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.value} onChange={this.props.onChangeInput} />
                <p>
                    <label>
                        <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.onChangeCheck} />
                        Only show products in stock
                    </label>
                </p>
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        let filteredArray = this.props.products.filter((item) => {
            let name = item.name.toLowerCase(); 
            let searchBy = this.props.searchBy.toLowerCase();
            if (name.indexOf(searchBy, 0) != -1) {
                return item;
            }
        }).filter((item) => {
            if (this.props.inStockOnly) {
                return item.stocked ? item : null;
            } else {
                return item;
            }
        });
        let prevCat;
        let rowsArray = filteredArray.map((item, index, array) => {
            prevCat = typeof(array[index-1]) == 'undefined' ? 'undefined' : array[index-1].category;
            if (prevCat == 'undefined' || item.category != prevCat) {
                return [<ProductCategoryRow category={item.category} />, <ProductRow product={item} />];
            } else {
                return <ProductRow product={item} />;
            }
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {rowsArray}
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        let name = this.props.product.stocked ? 
        this.props.product.name :
        <span style={{color: "red"}}>{this.props.product.name}</span>;
        return(
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {this.props.product.price}
                </td>
            </tr>
        )
    }
}

export default FilterableProductTable;
export {PRODUCTS};