<script>
	let m = { x: 0, y: 0 };
</script>

<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
    With a lambda expression?
</div>