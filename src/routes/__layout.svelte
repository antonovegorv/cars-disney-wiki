<script>
    import '../tailwind.css';
    import '../app.css';

    import Nav from '../lib/Nav.svelte';
    import Footer from '../lib/Footer.svelte';
</script>

<Nav />
<div class="container px-8 md:px-18 lg:px-48 py-8">
    <slot />
</div>
<Footer />
