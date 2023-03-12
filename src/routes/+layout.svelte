<script lang="ts">
	import './globals.scss';
	import MainNav from '$lib/MainNav.svelte';
</script>

<svelte:head>
	<title>Brian Perry | Data Analytics | Software Engineering | Automation | Web Development</title>
</svelte:head>

<MainNav />

<slot />

<style lang="scss">
	@use "../../static/styles/vars.scss";
	body {
		background-color: vars.$bg-dark;
		color: vars.$primary-color;
	}
</style>
