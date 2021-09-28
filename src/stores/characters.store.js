import { writable } from 'svelte/store';
import charactersJSON from '../../characters.json';

export const characters = writable([]);

const fetchCars = async () => {
	characters.set(charactersJSON);
};

fetchCars();
