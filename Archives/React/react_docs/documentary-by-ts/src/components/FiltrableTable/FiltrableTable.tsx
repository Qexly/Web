import { type } from 'node:os';
import React, {useEffect, useState} from 'react';

export const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

type product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string,
}

interface IFilterableProductTableProps {
    products: product[],
}

const FilterableProductTable: React.FC<IFilterableProductTableProps> = (props) => {

    const {products} = props;

    const [search, setSearch] = useState<string>('');
    const [showInStock, setShowInStock] = useState<boolean>(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox'){
            setShowInStock(e.target.checked);
        } else {
            setSearch(e.target.value)
        }
    }

    return (
        <div>
            <SearchBar searchValue={search} showInStockValue={showInStock} onChange={onChangeHandler} />
           <ProductTable searchValue={search} showInStockValue={showInStock} products={products} />
        </div>
    )
}

interface ISearchBar {
    searchValue: string,
    showInStockValue: boolean,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBar: React.FC<ISearchBar> = (props) => {

    const {searchValue, showInStockValue, onChange} = props;

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchValue} onChange={onChange} />
            <br />
            <label>
                <input type="checkbox" checked={showInStockValue} onChange={onChange}/>
                Only show products in stock
            </label>
        </div>
    )
}

interface IProductTable {
    products: product[],
    searchValue: string,
    showInStockValue: boolean,
}

const ProductTable: React.FC<IProductTable> = (props) => {

    const {searchValue, showInStockValue} = props;
    let products = props.products.filter((product) => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    if (showInStockValue) products = products.filter(product => product.stocked);

    let category: string;

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
                {
                    products.map((product) => {
                        if (product.category !== category) {
                            category = product.category;
                            return (
                                <>
                                    <ProductCategoryRow category={product.category} />
                                    <ProductRow name={product.name} price={product.price} inStock={product.stocked}/>
                                </>
                            )
                        } else {
                            return <ProductRow name={product.name} price={product.price} inStock={product.stocked}/>
                        }
                    })
                }
           
        </table>
    )
}

interface IProductCategoryRowProps {
    category: string,
}

const ProductCategoryRow: React.FC<IProductCategoryRowProps> = (props) => {

    const {category} = props;

    const style = {
        fontWeight: 'bold' as 'bold',
        textAlign: 'center' as 'center'
    };

    return (
        <tr>
            <td style={style} colSpan={2}>{category}</td>
        </tr>
    )
}

interface IProductRow {
    name: string,
    price: string,
    inStock: boolean,
}

const ProductRow: React.FC<IProductRow> = (props) => {

    const {name, price, inStock} = props;
    const style = inStock ? undefined : {color: 'red'};

    return (
        <tr>
            <td style={style}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default FilterableProductTable;