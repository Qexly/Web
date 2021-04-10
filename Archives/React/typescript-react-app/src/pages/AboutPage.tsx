import React  from 'react';
import {useHistory} from 'react-router-dom';

const AboutPage: React.FC = (props) => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <button onClick={() => history.push('/')}>К списку</button>
        </>
    )
}

export default AboutPage;