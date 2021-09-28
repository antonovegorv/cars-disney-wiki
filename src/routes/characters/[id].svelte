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
	import { onMount } from 'svelte';
	import EmblaCarousel from 'embla-carousel';

	onMount(() => {
		const emblaNode = document.querySelector('.embla');
		const options = { loop: true };

		embla = EmblaCarousel(emblaNode, options);
	});

	export let embla;
	export let character;
</script>

<section>
	<div>
		<img class="mx-auto rounded-full" src="{character.images.avatar}.webp" alt="{character.name}">
	</div>
</section>

<section class="py-8">
	<h1 class="text-4xl font-medium font-roboto">{character.name}</h1>
	<p class="mt-2 text-xl font-montserrat">{character.description[0]}</p>
	<p class="mt-2 text-xl font-montserrat">{character.description[1]}</p>
</section>

<section class="py-8">
	<h2 class="text-4xl font-medium font-roboto">Галерея</h2>
	<div class="mt-4 embla">
		<div class="embla__container">
			{#each character.images.slides as slide}
				<div class="embla__slide">
					<img src="{slide}.webp" alt="{slide}" class="w-11/12 md:w-9/12 mx-auto rounded-lg">
				</div>
			{/each}
		</div>
	
		<div class="flex justify-center mt-4">
			<button class="px-4 py-2 mr-3 rounded-full border-2 border-gray-800" on:click="{embla.scrollPrev()}">Назад</button>
			<button class="px-4 py-2 rounded-full border-2 border-gray-800" on:click="{embla.scrollNext()}">Вперед</button>
		</div>
	</div>
</section>
