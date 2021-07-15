<script>
  import { fade, fly } from 'svelte/transition'
  import { clickOutside } from './click-outside'
  import Portal from './portal.svelte'
  export let isModalOpen = false
  export let background = true

  function closeModal() {
    isModalOpen = false
  }
</script>

{#if isModalOpen}
  <Portal>
    <div
      use:clickOutside
      on:click-outside={closeModal}
      class="wrapper"
      transition:fly={{ opacity: 0, y: 100 }}
    >
      <button
        class="close-button"
        on:click={closeModal}
        aria-label="Close modal box">Close</button
      >
      <slot />
    </div>
    {#if background}
      <div class="background" on:click={closeModal} transition:fade />
    {/if}
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
  .close-button {
    position: absolute;
    top: -10px;
    right: -10px;
  }
</style>
