import React, { useState } from 'react';

const FilterableTable = (props) => {
    let {products} = props;
    
    const [searchValue, setSearch] = useState('');
    const [showInStock, setShowInStock] = useState(false);
    const formsFields = {'showInStock': setShowInStock, 'searchValue': setSearch};

    const searchOnChangeHandler = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        formsFields[e.target.name](() => value);
    }

    products = showInStock ? products.filter(item => item.stocked) : products;
    products = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase())); 

    return (
        <div>
            <SearchBar searchValue={searchValue} showInStock={showInStock} onChange={searchOnChangeHandler} />
            <ProductTable products={products} />
        </div>
    )
}

const SearchBar = (props) => {
    let {searchValue, showInStock, onChange} = props;

    const formOnChange = (e) => {
        onChange(e);
    }

    return (
        <div>
            <form onChange={formOnChange}>
                <input value={searchValue} name="searchValue" type="text" placeholder="Search..." />
                <br />
                <label>
                    <input name="showInStock" type="checkbox" checked={showInStock} />
                    Only show products in stock
                </label>
            </form>
        </div>
    )
}

const ProductTable = (props) => {
    const {products} = props;
    let category = null;
    const rows = products.map((product) => {
        if (product.category !== category) {
            category = product.category;
            return (
                <>
                    <ProductCategoryRow category={product.category} />
                    <ProductRow name={product.name} price={product.price} stocked={product.stocked}/>
                </>
            ) 
        } else {
            return (
                <ProductRow name={product.name} price={product.price} stocked={product.stocked}/>
            )
        }    
    })

    return (
        <table>
            <tr className={'table-head'}>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {rows}
        </table>
    )
}

const ProductCategoryRow = (props) => {
    let {category} = props;
    return (
        <tr>
            <th colSpan={2} style={{fontWeight: 'bold'}}>{category}</th>
        </tr>
    )
}

const ProductRow = (props) => {
    const {name, price, stocked} = props;
    const style = !stocked ? {color: 'red'} : null;
    return (
        <tr style={style}>
            <th>{name}</th>
            <th>{price}</th>
        </tr>
    )
}

export default FilterableTable;