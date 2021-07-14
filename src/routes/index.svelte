<script>
  import Accordian from '$lib/accordian.svelte'
  import Field from '$lib/field.svelte'
  import Markdown from '$lib/markdown.svelte'
  import Portal from '$lib/portal.svelte'
  import SearchFilter from '$lib/search-filter.svelte'
  import Toggle from '$lib/toggle.svelte'
  let isToggled = false

  let items = ['svelte', 'react', 'vue', 'angular']
  let search = ''
  let markdownText = ''
</script>

<h1>Welcome to SvelteKit UI</h1>

<h2>Portal</h2>

<Portal>
  <Markdown bind:markdownText />
</Portal>

<hr />

<h2>Markdown</h2>

<Markdown bind:markdownText />

<hr />

<p>Markdown text outside of the component</p>

{@html markdownText}

<hr />

<Field value={0} type="number" />

<hr />

<h2>Dynamic fields</h2>

<Field
  bind:value={search}
  label="Search..."
  instructions="Type to search"
  placeholder="Svelte"
/>

<hr />

<h2>Search</h2>

<SearchFilter {items} bind:search />

Search: {search}

<hr />

<h2>Accordian</h2>

<Accordian isOpen={true} buttonText="More info">
  <div>
    <p>Here is some information about the accordian</p>
  </div>
</Accordian>

<hr />

<h2>Toggle</h2>

<Toggle bind:isToggled label="Default" />
<Toggle
  bind:isToggled
  label="With Style"
  style="--toggleBackgroundColor: orange"
/>
