import { atom } from 'recoil';

export const stepIntputState = atom({
	key: 'stepIntputState',
	default: { steps: [{ stepNum: 0, description: '' }] },
});
