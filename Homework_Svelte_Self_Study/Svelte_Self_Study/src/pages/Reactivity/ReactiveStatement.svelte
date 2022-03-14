<script>
	let count = 0;

	$: if (count >= 10) {
		alert(`I said max 9`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'} MAX 9 TIMES!
</button>