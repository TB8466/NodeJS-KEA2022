<script>
import Apple from "./Apple.svelte";

    const apples = ["🍎","🍏","🍎","🍏","🍎","🍏"];

    function randomApple(farmerName){
        if(apples.length>0){
            const ran = Math.floor(Math.random()*apples.length);
            console.log(apples[ran],farmerName)
            apples.pop();
        }
        else{
            console.log("You have picked all the apples")
        }
    }
</script>

<div id="tree">
    <h1>Tree</h1>
    {#each apples as apple }
        <Apple apple={apple} />
    {/each}
    <button on:click={() =>randomApple("Bob")}>Pick an apple</button>
</div>

<div id="trunk">

</div>

<style>
    #tree{
        background-color: greenyellow;
    }
    #trunk{
        background-color: rgb(165, 87, 42);
        height: 120px;
        width: 50px;
    }
</style>