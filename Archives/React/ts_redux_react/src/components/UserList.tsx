import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {

    const {error, loading, users} = useTypedSelector(state => state.user); //disp
    //const dispatch = useDispatch();
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1> Loading... </h1>
    }

    if (error) {
        return <h1> {error} </h1>
    }

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UserList;
