import { atom } from 'recoil';

export const recipeIntputState = atom({
	key: 'recipeIntputState',
	default: { userId: '', title: '', description: '', prepTime: '', cookTime: '' },
});
