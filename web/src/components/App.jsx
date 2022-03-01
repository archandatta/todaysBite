import './App.css';
import Router from './Router';
import { RecoilRoot } from 'recoil';

const App = () => {
	return (
		<RecoilRoot>
			<div className="App">
				<Router />
			</div>
		</RecoilRoot>
	);
};

export default App;
