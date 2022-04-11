import { atom } from 'recoil';

export const mealPlanState = atom({
	key: 'mealPlanState',
	default: {
		Day: {
			Course: '',
		},
		Monday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Tuesday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Wednesday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Thursday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Friday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Saturday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
		Sunday: {
			Breakfast: '',
			Lunch: '',
			Dinner: '',
		},
	},
});
