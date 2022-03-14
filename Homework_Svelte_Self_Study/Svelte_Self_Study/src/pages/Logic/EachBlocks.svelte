<script>
	let links = [
		{ link: 'https://letmegooglethat.com/?q=how+to+svelte%3F&l=1', name: 'Google' },
		{ link: 'https://www.youtube.com', name: 'YouTube' },
		{ link: 'https://en.wikipedia.org', name: 'Wikipedia' }
	];
</script>

<h1>Problems with your code?:</h1>

<ul>
	{#each links as { link, name }, x}
		<li>
			<a target="_blank" href={link}>
				{x + 1}: {name}
			</a>
		</li>
	{/each}
</ul>
