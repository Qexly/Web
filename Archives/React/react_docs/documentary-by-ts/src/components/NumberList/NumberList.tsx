
interface NumberListProps {
    numbers: number[],
}

const NumberList: React.FC<NumberListProps> = (props) => {

    const listItems = props.numbers.map((num) => <li key={num}>{num}</li>);

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default NumberList;