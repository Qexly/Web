const validationSchemeForLoginForm = {
    password: {
        value: '',
        check: true,
        rules: [
            {
                type: 'required',
                prompt: 'Введите пароль'
            },
            {
                type: 'minLength[8]',
                prompt: 'Минимальное количество символов 8'
            }
        ]
    },
    name: {
        value: '',
        check: false
    }
}

// вспомогательный интерфейс для правил проверок
interface Rules {
    type: string,
    prompt: string
} 

interface ValidationSchemeForLoginForm {
    password: {
        value: string,
        check: boolean,
        rules: Rules[]
    },
    name: {
        value: string,
        check: boolean
    }

    email: {
        value: string,
        check: boolean,
        rules: Rules[]
    }

}

/////////
interface LoginFormFields {
    password: string,
    name: string,
    //email: string
}

type ValidationScheme<T> = { //ValidationScheme<LoginFormFields>
    [K in keyof T]: { 
        value: T[K],//итерации
        check: boolean,
        rules?: Rules[]
    }
}

type ValidationSchemeForLoginForm = ValidationScheme<LoginFormFields>;

//Получилось:
/*
type ValidationScheme = {
    password: {
        value: string,
        check: boolean,
        rules?: Rules[]
    },
    name: {
        value: string,
        check: boolean,
        rules?: Rules[]
    },
    email: {

    }
}
*/

const vaalidationSchemeForLoginForm: ValidationSchemeForLoginForm = {
    password: {
        value: '',
        check: true,
        rules: [
            {
                type: 'required',
                prompt: 'Введите пароль'
            },
            {
                type: 'minLength[8]',
                prompt: 'Минимальное количество символов 8'
            }
        ]
    },
    name: {
        value: '',
        check: false
    },
    email: {
        value: '',
        check: true,
        rules: [
            {
                type: 'required',
                prompt: 'Введите email'
            },
            {
                type: 'email',
                prompt: 'Введите корректный email'
            }
        ]
    }
}
