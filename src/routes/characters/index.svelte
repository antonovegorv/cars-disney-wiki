<script>
    import { characters } from '../../stores/characters.store.js';

    import CharacterCard from '../../lib/CharacterCard.svelte';
</script>

<section>
    <h1 class="text-4xl font-medium font-roboto">Персонажи мультфильма Тачки</h1>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {#each $characters as character}
            <CharacterCard character={character} />
        {/each}
    </div>
</section>
