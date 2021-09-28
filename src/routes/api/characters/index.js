import charactersJSON from '../../../../characters.json';

export async function get() {
	return {
		status: 200,
		body: JSON.stringify(charactersJSON),
		headers: {
			'Content-Type': 'application/json; charset=utf-8;',
		},
	};
}
