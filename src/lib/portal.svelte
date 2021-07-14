<script>
  function portal(node) {
    let target

    function update() {
      target = document.querySelector('body')
      target.appendChild(node)
      node.hidden = false
    }

    function destroy() {
      if (node.parentNode) {
        // child will tell parent to remove itself
        node.parentNode.removeChild(node)
      }
    }

    update()

    return { update, destroy }
  }
</script>

<div use:portal hidden>
  <slot />
</div>
