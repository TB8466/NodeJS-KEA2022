<script>
    export let name;
    export let onCallMeeting;

    
</script>

<h1 on:click={onCallMeeting(name)}>Hi Im a parent named {name}</h1>