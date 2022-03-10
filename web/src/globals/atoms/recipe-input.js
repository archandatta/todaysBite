import { atom } from 'recoil';

export const recipeIntputState = atom({
	key: 'recipeIntputState',
	default: { title: '', description: '', prepTime: '', cookTime: '' },
});
