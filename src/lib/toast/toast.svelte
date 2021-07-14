<script>
  import Portal from '$lib/portal.svelte'
  import { flip } from 'svelte/animate'
  import { tweened } from 'svelte/motion'
  import { fade, fly } from 'svelte/transition'
  import { toast } from './toast'

  let progress = tweened(0, 1, { duration: 1000 })

  async function updateProgress() {
    const newProgress = Math.random() * 100
    await progress.set(newProgress)
    toast.remove()
  }
</script>

<h1>{$progress}</h1>
<div
  style={`width: ${$progress}%; height: 20px; background: rebeccapurple;`}
/>
<button on:click={updateProgress}>Whee</button>

<Portal>
  <div class="wrapper">
    {#each $toast as message (message)}
      <div
        on:click={toast.remove}
        animate:flip
        out:fade
        in:fly={{ opacity: 0, x: 100 }}
        class="toast"
      >
        <p>{message}</p>
      </div>
    {/each}
  </div>
</Portal>

<style>
  .wrapper {
    position: fixed;
    bottom: 0;
    right: 20px;
  }
  .toast {
    margin-bottom: 1rem;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }
  p {
    margin: 0;
  }
</style>
