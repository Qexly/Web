import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'338c373f-4be2-4616-948e-177be0a39724',
    }
})

export const UsersApiDal = {
    getUsers(pageSize, currentPage) {
        return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`,
                {withCredentials: true})
                .then((responce) => responce.data)
        )
    },  
}


