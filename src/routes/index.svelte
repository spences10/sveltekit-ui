<script>
  import Accordian from '$lib/accordian.svelte'
  import Field from '$lib/field.svelte'
  import Markdown from '$lib/markdown.svelte'
  import Modal from '$lib/modal.svelte'
  import SearchFilter from '$lib/search-filter.svelte'
  import { toast } from '$lib/toast/toast'
  import Toast from '$lib/toast/toast.svelte'
  import Toggle from '$lib/toggle.svelte'
  import ToolTip from '$lib/tool-tip.svelte'

  let isToggled = false
  let items = ['svelte', 'react', 'vue', 'angular']
  let search = ''
  let markdownText = ''
  let isModalOpen = false
</script>

<h1>Welcome to SvelteKit UI</h1>

<h2>Tooltip</h2>

<ToolTip title="this is a tooltip">
  <Field value={0} type="number" />
  <Field value="Hi" type="text" />
</ToolTip>

<hr />

<h2>Toast 2</h2>

<Modal bind:isModalOpen backgrond={false}>
  <Field value={0} type="number" />
  <Field value="Hi" type="text" />
</Modal>
<button on:click={() => (isModalOpen = !isModalOpen)}
  >Open Modal</button
>

<hr />

<h2>Toast</h2>

<Toast duration={3000} />

<button
  on:click={() => (
    toast.send('Hello, world!' + Math.random()), false
  )}>New toast</button
>

<hr />

<h2>Modal</h2>

<Modal {isModalOpen}>
  <Markdown bind:markdownText />
</Modal>
<button on:click={() => (isModalOpen = !isModalOpen)}
  >Open Modal</button
>

<p>
  Is modal open: {isModalOpen}
</p>

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
