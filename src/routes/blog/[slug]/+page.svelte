<script>
	import Form from './Form.svelte';

	export let form;
</script>

<section>
	Post
	<Form />

	{#if form?.data}
		<pre>{JSON.stringify(form.data, null, 2)}</pre>
	{/if}
</section>
