import { useEffect, useState } from 'react';
import { authenticate } from '../../util/rest/auth';

export const useAuth = (username, password) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const user = await authenticate(username, password);
			setResponse(user.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { response, error, loading };
};
