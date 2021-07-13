<script>
  import Accordian from '$lib/accordian.svelte'
  import Toggle from '$lib/toggle.svelte'
  let isToggled = false
</script>

<h1>Welcome to SvelteKit UI</h1>

<Accordian isOpen={true} buttonText="More info">
  <div>
    <p>Here is some information about the accordian</p>
  </div>
</Accordian>

<Toggle bind:isToggled label="Default" />
<Toggle
  bind:isToggled
  label="With Style"
  style="--toggleBackgroundColor: orange"
/>
