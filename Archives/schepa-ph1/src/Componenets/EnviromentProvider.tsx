import {
    createContext,
    ReactElement,
    useContext,
    useState,
    useEffect,
    UIEvent,
    useCallback,
    useMemo
} from 'react';

const ADAPTIVE_CLASS = 'is-adaptive';

const ADAPTIVE_WIDTH: number = 700;

const getIsMobile = (): boolean => {
    const details = navigator.userAgent;
    const regexp = /mobile/i;
    return regexp.test(details);
}

const getAdaptiveMode = (): boolean => window.innerWidth <= ADAPTIVE_WIDTH || getIsMobile();

const getIsTouch = (): boolean => ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

const ENV = {
    adaptiveMode: getAdaptiveMode(),
    isTouch: getIsTouch()
}

const EnvContext = createContext(ENV);

interface IProps {
    children?: JSX.Element;
    rootBlock: HTMLElement;
}

export const useEnv = () => useContext(EnvContext);

const EnvProvider = ({children, rootBlock}: IProps): ReactElement => {
    const [envState, setEnv] = useState(ENV);

    useMemo(() => {
        if (envState.adaptiveMode) {
            rootBlock?.classList.add(ADAPTIVE_CLASS);
        } else {
            rootBlock?.classList.remove(ADAPTIVE_CLASS);
        }
    }, [envState])

    const resizeHandler = useCallback((e: UIEvent): void => {
        setEnv({
            adaptiveMode: getAdaptiveMode(),
            isTouch: getIsTouch()
        });
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