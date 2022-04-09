import { atom } from 'recoil';

export const mealPlanState = atom({
	key: 'mealPlanState',
	default: {
		Day: {
			Course: 'na',
		},
		Monday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Tuesday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Wednesday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Thrusday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Friday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Saturday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Sunday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
	},
});
