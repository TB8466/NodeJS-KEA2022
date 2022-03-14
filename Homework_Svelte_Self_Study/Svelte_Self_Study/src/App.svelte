<script>
import DeclaringProps from "./pages/Props/DeclaringProps.svelte";
import HelloWorld from "./pages/Intro/HelloWorld.svelte";
import ReactiveAssignment from "./pages/Reactivity/ReactiveAssignment.svelte";
import ReactiveDeclaration from "./pages/Reactivity/ReactiveDeclaration.svelte";
import ReactiveStatement from "./pages/Reactivity/ReactiveStatement.svelte";
import RickRoll from "./pages/Intro/RickRoll.svelte";
import Styling from "./pages/Intro/Styling.svelte";
import DefaultValues from "./pages/Props/DefaultValues.svelte";
import SpreadProps from "./pages/Props/SpreadProps.svelte";
import IfBlock from "./pages/Logic/IfBlock.svelte";
import IfElseBlock from "./pages/Logic/ElseBlock.svelte";
import ElseIfBlock from "./pages/Logic/ElseIfBlock.svelte";
import EachBlocks from "./pages/Logic/EachBlocks.svelte";
import DomEvents from "./pages/Events/DOMEvents.svelte";
import InlineHandler from "./pages/Events/InlineHandler.svelte";
import EventModifier from "./pages/Events/EventModifier.svelte";
import ComponentEvents from "./pages/Events/ComponentEvents.svelte";
import Outer from "./pages/Events/EventForwarding/Outer.svelte";

	let name = "Hello world";
	let string = `HTML Tag:  <strong>HTML!</strong>`;

	const person = {
		name : "BillyBob",
		age : "42",
		hobby : "Drinking moonshine"
	}
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<main>
	<h1>INTRO:</h1>
<HelloWorld helloWorld={name} />
<RickRoll src={"/pages/rick-roll.gif"} />
<Styling text="This has been styled" />
<p>{@html string}</p>
	<h1>REACTIVITY:</h1>
<ReactiveAssignment />
<br>
<ReactiveDeclaration />
<br>
<ReactiveStatement />
<br>
	<h1>PROPS:</h1>
<DeclaringProps statement1="Good" statement2="Morning" statement3="Vietnam!" />
<DefaultValues/>
<DefaultValues declaration="But now I changed the value?!?!?"/>
<SpreadProps {...person}/>
	<h1>LOGIC:</h1>
<IfBlock/>
<IfElseBlock/>
<ElseIfBlock x=4/>
<EachBlocks/>
	<h1>EVENTS:</h1>
<DomEvents/>
<InlineHandler/>
<EventModifier/>
<ComponentEvents on:message={handleMessage}/>
<Outer on:message={handleMessage}/>
</main>

<style>
	h1{
		font-size: larger;
		font-family: "Ariel Black";
		border-bottom: solid black;
	}
</style>