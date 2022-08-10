import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export type Item = {
  id: number;
  context: string
}

let id = 1
const generateId = () => id++

export const useTodoStore = defineStore("todo", () => {
  const newItem = ref("")
  const items = reactive<Item[]>([])
  const itemCount = computed(() => items.length)
  async function addItem() {
    items.push({
      id: generateId(),
      context: newItem.value
    })
    //reset 
    newItem.value = ""
    return "resolve"
  }

  function remoeItem(item: Item) {
    const index = items.indexOf(item)
    items.splice(index, 1)
  }
  return {
    newItem,
    items,
    itemCount,
    addItem,
    remoeItem,
  }
})
