<script>
	let count = 1;

	$: doubled = count * 2;
	$: quadrupled = doubled * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Count: {count}
</button>

<p>The double of: {count} is: {doubled}</p>
<p>The quadrupled of: {count} is: {quadrupled}</p>