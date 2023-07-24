import {createContext, ReactElement, useContext} from 'react';

const ADAPTIVE_WIDTH: number = 700;

const ENV = {
    adaptiveMode: window.innerWidth <= ADAPTIVE_WIDTH
}

const EnvContext = createContext(ENV);

interface IProps {
    children?: JSX.Element;
}

export const useEnv = () => useContext(EnvContext);

const EnvProvider = ({children}: IProps): ReactElement => {
    return (
        <EnvContext.Provider value={ENV}>
            {children}
        </EnvContext.Provider>
    )
}

export default EnvProvider;