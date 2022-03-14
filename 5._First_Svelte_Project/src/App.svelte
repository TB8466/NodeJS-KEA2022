<script>
	export let name;


	import Duck from "./pages/Duck/Duck.svelte"
	import Apples from "./pages/Tree/Apple.svelte"
	import Tree from "./pages/Tree/Tree.svelte"
	import Profile from "./pages/Profile/Profile.svelte"
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Apples></Apples>
	<Tree></Tree>
	<Duck></Duck>
	<!-- <Profile name={name} />
	<Profile name={"Bob"} /> -->
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