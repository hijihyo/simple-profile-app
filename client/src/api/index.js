import axios from 'axios'

const axiosInstance = axios.create({
    timeout: 1000,
    withCredentials: true
})

export const postSignup = async (formData) => {
    try {
        const result = await axiosInstance.post('/api/signup', formData);
        return result
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}

export const postSignin = async (formData) => {
    try {
        const result = await axiosInstance.post('/api/signin', formData);
        return result
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}

export const postSignout = async () => {
    try {
        const result = await axiosInstance.post('/api/signout');
        return result
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}

export const getSession = async () => {
    try {
        const result = await axiosInstance.get('/api/session');
        return result
    } catch (e) {
        // if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        // else alert('Error');
    }
}

export const getProfiles = async () => {
    try {
        const result = await axiosInstance.get('/api/profile');
        return result
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}

export const getProfile = async (id) => {
    try {
        const result = await axiosInstance.get(`/api/profile/${id}`);
        return result;
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}

export const getMyProfile = async () => {
    try {
        const result = await axiosInstance.get(`/api/myprofile`);
        return result;
    } catch (e) {
        if (e.response) alert(`${e.response.status}:${e.response.statusText}`);
        else alert('Error');
    }
}
