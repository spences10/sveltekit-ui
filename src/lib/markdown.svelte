<script>
  import marked from 'marked'

  let text = ''
  export let markdownText = text
  $: {
    markdownText = marked(text)
  }
</script>

<div class="wrapper">
  <textarea id="" cols="30" rows="10" bind:value={text} />
  <!-- 🚨 use DOM purify for unsanitised html 🚨 -->
  <div>{@html markdownText}</div>
</div>

<style>
  .wrapper {
    display: flex;
  }
  .wrapper > * {
    width: 50%;
  }
</style>
