<script>
	import Button from "../../components/button/Button.svelte";

	export let name;

	function setAlert() {
		alert('Hello World')
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<Button onClick={setAlert} content="Click me!"/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>