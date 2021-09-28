import charactersJSON from '../../../../characters.json';

export async function get({ params }) {
	return {
		status: 200,
		body: JSON.stringify(charactersJSON[params.id - 1]),
		headers: {
			'Content-Type': 'application/json; charset=utf-8;',
		},
	};
}
