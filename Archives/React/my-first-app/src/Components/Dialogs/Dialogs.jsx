import s from './Dialogs.module.css';

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Dimitry
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Maxim
                </div>
                <div className={s.dialog}>
                    Peter
                </div>
                <div className={s.dialog}>
                    Vitalya
                </div>
                <div className={s.dialog}>
                    Vladislav
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are u?</div>
                <div className={s.message}>Wazzup! All ok!</div>
                <div className={s.message}>Nice!</div>
            </div>
        </div>
    );
}

export default Dialogs;