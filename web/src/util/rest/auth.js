import axios from 'axios';

const authAxios = axios.create({
	baseURL: 'http://localhost:5000',
});

const getUser = async () => {
	try {
		const user = await authAxios.get('/user');
		console.info(user);
	} catch (e) {
		console.info(e);
	}
};

export { getUser };
