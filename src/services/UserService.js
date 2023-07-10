import axios from './customize-axios';

const fetchAllUser = () => {
    return axios.get('/api/v1/user');
}

const postCreateUser = (full_name, birthday, gender, phone_number, address, email, introduction, image) => {
    return axios.post('/api/v1/user', { full_name, birthday, gender, phone_number, address, email, introduction, image })
}

const putUpdateUser = (_id, full_name, birthday, gender, phone_number, address, email, introduction, image) => {
    return axios.put(`/api/v1/user/${_id}`, { _id, full_name, birthday, gender, phone_number, address, email, introduction, image })
}

const deleteUser = (_id) => {
    return axios.delete(`/api/v1/user/${_id}`, { _id })
}

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser };
