<script context="module">
	import charactersJSON from '../../../characters.json';

	export async function load(ctx) {
		return {
			props: {
				character: charactersJSON[ctx.page.params.id - 1],
			},
		};
	}
</script>

<script>
	export let character;
</script>

<section>
	<div>
		<img class="mx-auto rounded-full" src="{character.images.avatar}.webp" alt="{character.name}">
	</div>
</section>

<section class="py-8">
	<h1 class="text-4xl font-light font-roboto">{character.name}</h1>
	<p class="mt-2 font-montserrat">{character.description[0]}</p>
	<p class="mt-2 font-montserrat">{character.description[1]}</p>
</section>
