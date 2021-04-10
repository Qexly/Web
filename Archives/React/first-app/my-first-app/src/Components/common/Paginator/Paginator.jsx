import {useState} from 'react';
import s from './Paginator.module.css';

function Paginator(props) {

    let {portionsSize} = props;

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(1 + i);
    }

    let portions = Math.ceil(pagesCount / portionsSize);
    let [currentPortion, setPortion] = useState(1);
    let right = portionsSize * currentPortion;
    let left = right - (portionsSize - 1);
    let currentPages = [];
    for (let i = left; i < right + 1; i++) {
        if (pages[i-1]) currentPages.push(pages[i-1]);
    }

    const nextPortionButtonHandler = (e) => {
        if (currentPortion + 1 <= portions) setPortion((prevPortion) => ++prevPortion);
    }

    const prevPortionButtonHandler = (e) => {
        if (currentPortion - 1 >= 1) setPortion((prevPortion) => --prevPortion);
    }

    return (
        <div>
            	<button onClick={prevPortionButtonHandler}>&lt;</button>
            {
                currentPages.map((item) => {
                    return <span key={item}
                        className={props.currentPage == item ? s.selectedPage : null}
                        onClick={props.onPageChangeHandler}>{item + ' '}</span>
                })
            }
                <button onClick={nextPortionButtonHandler}>&gt;</button>
        </div>
    )
}

export default Paginator;