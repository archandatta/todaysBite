import axiosConfig from '../../axiosConfig';

const authenticate = (username, password) => {
	return axiosConfig.post('/create-user', {
		username: username,
		password: password,
	});
};

export { authenticate };
