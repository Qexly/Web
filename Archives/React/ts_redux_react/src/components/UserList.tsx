import {useSelector} from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {

    const {error, loading, users} = useTypedSelector(state => state.user)
    

    return (
        <div>

        </div>
    );
};

export default UserList;

