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
            instance.get(`users?count=${pageSize}&page=${currentPage}`)
                .then((responce) => responce.data)
        )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
}

export const profileApiDal = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authApiDal = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, remeberMe = false) {
        return instance.post(`/auth/login`, {email, password, remeberMe});
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}