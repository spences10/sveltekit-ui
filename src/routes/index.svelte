<script>
  import Toggle from '$lib/toggle.svelte'
  let isToggled = false
</script>

<h1>Welcome to SvelteKit UI</h1>

<Toggle bind:isToggled label="Whee" />
<Toggle
  bind:isToggled
  label="Whee"
  style="--toggleBackgroundColor: orange"
/>
