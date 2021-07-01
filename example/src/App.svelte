<script>
	import Button from '@presscommandz/svelte-component/src/button/Button.svelte'

	export let name;

	function Alert() {
		console.log('fire!')
		alert('Hello World!')
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<Button onClick={Alert} content="Click me 123"/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>