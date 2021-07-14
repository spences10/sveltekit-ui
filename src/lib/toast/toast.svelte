<script>
  import Portal from '$lib/portal.svelte'
  import { flip } from 'svelte/animate'
  import { fade, fly } from 'svelte/transition'
  import { toast } from './toast'
</script>

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
