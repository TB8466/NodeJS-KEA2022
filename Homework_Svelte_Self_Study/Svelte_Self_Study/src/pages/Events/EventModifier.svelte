<script>
	function handleClick() {
		alert('Thx for clicking me, now goodbye :)')
	}
</script>

<button on:click|once={handleClick}>
	This button can only be clicked once
</button>