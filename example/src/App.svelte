<script>
	import Button from "../../src/button/Button.svelte";

	export let name;

	function Alert() {
		console.log('fire!')
		alert('Hello!')
	}
</script>

<main>
	<h1>Hello {name} 123!</h1>
	<Button onClick={Alert} content="Click me"/>
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