import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'fc6c1651-940b-470c-92b1-2d2f20f31bce',
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
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}} );
    },
    saveProfile(formData) {
        console.log(formData);
        return instance.put(`profile`, formData);
    }
}

export const authApiDal = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, remeberMe = false, captcha = null) { //Если капча отправится, даже когда не нужна - ничего страшного 
        return instance.post(`/auth/login`, {email, password, remeberMe, captcha});
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}

export const securityAPI = {
   getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
   } 
}

