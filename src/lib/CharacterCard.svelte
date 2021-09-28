<script>
    export let character;
</script>

<a href="/characters/{character.id}">
    <div class="p-4 h-full rounded-lg border-2 border-gray-200 bg-gray-100 hover:bg-gray-200">
        <div>
            <img class="w-full rounded" src="{character.images.avatar}.webp" alt="{character.name}">
        </div>
        <h3 class="mt-2 font-roboto">{character.name}</h3>
        <p class="text-gray-400">{character.info}</p>
    </div>
</a>