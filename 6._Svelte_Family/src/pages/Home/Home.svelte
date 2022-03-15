<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import {supermarket} from "../../store/supermarket.js";
console.log($supermarket);

    const parents = [
        {
            key : 1,
            name: "Tom"
        },
        {
            key : 2,
            name: "Joe"
        }
    ];

    function handleFamilyMeeting(name){
        console.log("A family meeting has been called by:",name);
    }
</script>
<h1>Welcome to Svelte Fam</h1>
{#each parents as parent (parent.key) }
<Parent onCallMeeting={handleFamilyMeeting} name={parent.name}/>
{/each}

<Child onCallMeeting={handleFamilyMeeting} stereotype="good-kid" name="Bob"/>
<Child onCallMeeting={handleFamilyMeeting} stereotype="" isGirl={true} name="Alice"/>
<Child onCallMeeting={handleFamilyMeeting} stereotype="bad-kid" name="John"/>

<h3>Supermarket:</h3>
<div>{JSON.stringify($supermarket, null, 4)}</div>