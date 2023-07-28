import {ReactElement} from 'react';
import Header from 'Components/Header';
import {useEnv} from "../Components/EnviromentProvider";

interface IProps {
    children: JSX.Element;
}

const PageLayout = ({children}: IProps): ReactElement => {
    const {adaptiveMode} = useEnv();

    return (
        <>
            <Header adaptiveMode={adaptiveMode} />
            {
                children
            }
        </>
    )
};

export default PageLayout;