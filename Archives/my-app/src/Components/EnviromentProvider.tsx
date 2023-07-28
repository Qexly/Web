import {createContext, ReactElement, useContext, useState, useEffect, UIEvent, useCallback} from 'react';

const ADAPTIVE_WIDTH: number = 700;

const getAdaptiveMode = (): boolean => window.innerWidth <= ADAPTIVE_WIDTH;
/*
const isMobile () => {
    const details = navigator.userAgent;
    const regexp = /mobile/i;

}
 */

const ENV = {
    adaptiveMode: getAdaptiveMode()
}

const EnvContext = createContext(ENV);

interface IProps {
    children?: JSX.Element;
}

export const useEnv = () => useContext(EnvContext);

const EnvProvider = ({children}: IProps): ReactElement => {
    const [envState, setEnv] = useState(ENV);

    const resizeHandler = useCallback((e: UIEvent): void => {
        setEnv({adaptiveMode: getAdaptiveMode()});
    }, [setEnv, envState]);

    useEffect(() => {
        (window as any).addEventListener('resize', resizeHandler);

        return () => (window as any).removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <EnvContext.Provider value={envState}>
            {children}
        </EnvContext.Provider>
    )
}

export default EnvProvider;