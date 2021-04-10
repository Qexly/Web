import React, {useState} from 'react';
import s from './WarningBanner.module.css';

interface IWarningBannerProps {
    warn: boolean,
}

const WarningBanner: React.FC<IWarningBannerProps> = (props) => {
    const {warn} = props;

    if (!warn) return null;

    return (
        <div className={s.warning}>
            Warning
        </div>
    )
}

const Page: React.FC = (props) => {

    const [showWarn, setShowWarn] = useState<boolean>(true);
    
    const warnButtonHandler = () => {
        setShowWarn((value) => !value);
    }

    return (
        <div>
            <WarningBanner warn={showWarn} />
            <button onClick={warnButtonHandler}>
                {showWarn ? "HIDE" : "SHOW"}
            </button>
        </div>
    )
}

export default Page;