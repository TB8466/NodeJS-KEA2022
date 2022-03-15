<script>
    import {supermarket} from "../../store/supermarket.js";

    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let onCallMeeting;

    function eatCereal(){
        supermarket.update(value => {
            if(value.cereal > 0) value.cereal --;
        
            return value;
        });
    }

    console.log("Is",name,"a girl?",isGirl,"\nAnd their stereotype is",stereotype)
</script>

<h1 on:click={onCallMeeting(name)} class:girl={isGirl} class:boy={!isGirl} class={stereotype || "no-stereotype"}>
    Hi Im a child named {name}</h1>
<h2>There is this much cereal in the store: {$supermarket.cereal}</h2>
<button on:click={eatCereal}>Eat cereal</button>

<style>
    .girl{
        color: purple;
    }
    .boy{
        color: green;
    }
    .good-kid{
        background-color: yellow;
    }
    .bad-kid{
        background-color: black;
    }
</style>