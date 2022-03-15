<script>
	import {Router, Link, Route} from "svelte-navigator"
	import Home from "../../6._Svelte_Family/src/pages/Home/Home.svelte";
	import About from "./pages/About/About.svelte";
</script>

<Router>
	<nav>
		<Link to="/about">About</Link>
		<Link to="/">Home</Link>
	</nav>
</Router>
<Route path="/about" component={About} />
<Route path="/about" component={Home} />

<style>
	nav{
		background-color: green;
	}
</style>