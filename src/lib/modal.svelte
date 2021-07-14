<script>
  import { fade, fly } from 'svelte/transition'
  import Portal from './portal.svelte'

  export let isModalOpen = false

  function closeModal() {
    isModalOpen = false
  }
</script>

{#if isModalOpen}
  <Portal>
    <div class="wrapper" transition:fly={{ opacity: 0, y: 100 }}>
      <button on:click={closeModal} aria-label="Close modal box"
        >Close</button
      >
      <slot />
    </div>
    <div class="background" on:click={closeModal} transition:fade />
  </Portal>
{/if}

<style>
  .wrapper {
    position: fixed;
    inset: 100px 0 0;
    min-width: 320px;
    max-width: 530px;
    margin: 0 auto;
    width: 100%;
    z-index: 101;
  }
  .background {
    background: black;
    opacity: 0.8;
    cursor: pointer;
    inset: 0;
    position: fixed;
    z-index: 100;
  }
</style>
