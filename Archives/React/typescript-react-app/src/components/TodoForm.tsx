import React, { useRef } from 'react';

interface TodoFormProps { //props объект должен реализовывать такой интерфейс
    onAdd(title: string): void, 
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    //const [title, setTitle] = useState<string>('');

    /*const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }*/

    const ref = useRef<HTMLInputElement>(null);

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            //console.log(title);
            //setTitle('');
            props.onAdd(ref.current!.value); //! - свойство точно будет
            ref.current!.value = '';
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                //onChange={changeHandler}
                type="text" 
                //value={title} 
                ref={ref}
                id="title" 
                placeholder="Введите название дела" 
                onKeyPress={onKeyPressHandler}
                />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}

export default TodoForm;