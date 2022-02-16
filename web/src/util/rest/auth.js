import axios from 'axios';

const authAxios = axios.create({
	baseURL: 'http://localhost:5000',
});

const getUser = () => {
	return authAxios.get('/user');
};

export { getUser };
