<script>
import Userregistration from "./Pages/Userregistration/Userregistration.svelte";
import {onMount} from "svelte"
import {Wave} from "svelte-loading-spinners"
import Colors from "./Pages/Colors/Colors.svelte";
let username = false;

onMount(async() => {
	const response = await fetch("/api/fetchuser");
	const {data} = await response.json();
	console.log(data);
	username = data;
});
//Console log username here

</script>

<main>
	{#if username === false}
		<div id="loading"><Wave></Wave></div>
	{:else if username}
	<h1>Welcome {username}</h1>
	<Colors></Colors>
	{:else}
	<Userregistration></Userregistration>
	{/if}
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
	#loading{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		min-width: 100vw;
	}
</style>