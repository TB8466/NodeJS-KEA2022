<script>
	import {Router, Link, Route} from "svelte-navigator"
	import Home from "./pages/Home/Home.svelte";
	import About from "./pages/About/About.svelte";
</script>

<Router>
	<nav>
		<Link to="/about">About</Link>
		<Link to="/">Home</Link>
	</nav>
	<Route path="/about" component={About} />
	<Route path="/" component={Home} />
</Router>


<style>
	nav{
		background-color: green;
	}
</style>