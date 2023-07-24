import React from 'react'; // удалить
import {ReactElement} from 'react';
import Header from 'Components/Header';

const Main = (): ReactElement => {
    return (
        <>
            <Header />
            <div>Главная</div>
        </>
    )
};

export default Main;