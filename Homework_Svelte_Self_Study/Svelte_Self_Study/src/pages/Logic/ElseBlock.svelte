<script>
	let test = { switchon: false };

	function toggle() {
		test.switchon = !test.switchon;
	}
</script>

{#if test.switchon}
    <button on:click={toggle}>
    Switch is on
    </button>
{:else}
    <button on:click={toggle}>
    Switch is off
    </button>
{/if}