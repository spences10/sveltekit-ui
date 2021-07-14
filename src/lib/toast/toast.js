import { writable } from 'svelte/store'

const newToast = () => {
  const { subscribe, update } = writable([])

  function send(message) {
    update(state => {
      return [...state, message]
    })
  }

  function remove() {
    update(state => {
      let [_first, ...rest] = state
      return [...rest]
    })
  }
  return {
    subscribe,
    send,
    remove,
  }
}

export const toast = newToast()
