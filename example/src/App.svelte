<script>
	import Card from '../../src/promotion/Card.svelte';
	const log = _ => console.log('hi')
</script>

<main>
	<Card price="9$/ month" onClick={log}/>
</main>
