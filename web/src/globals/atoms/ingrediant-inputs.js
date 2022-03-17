import { atom } from 'recoil';

export const ingrediantInputState = atom({
	key: 'ingrediantInputState',
	default: { ingrediants: [{ name: '', unit: '', quantity: '' }] },
});
