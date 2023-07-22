import React from 'react'; // удалить
import {ReactElement} from 'react';
import Header from 'Components/Header';

const Main = (): ReactElement => {
    return (
        <>
            <div>Главная</div>
            <Header />
        </>
    )
};

export default Main;