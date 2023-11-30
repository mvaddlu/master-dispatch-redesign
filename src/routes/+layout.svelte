<script>
    import '$lib/css/styles.css';
    import { init } from '$lib/main';
    import { onMount } from 'svelte';

    onMount(() => {
        init();
    })
</script>

<slot></slot>