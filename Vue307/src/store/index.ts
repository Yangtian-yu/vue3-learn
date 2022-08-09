import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    rawItems: [] as string[],
    userName: "杨天宇"
  }),
  getters: {
    items: (state) => {
      state.rawItems.reduce((items, item) => {
        const existingItems = items.find((it) => it.name === item)
        if (!existingItems) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItems.amount++
        }
        return items
      }, [])
    }
  },
  actions: {
    changeUserName(name: string) {
      this.userName = name
    },
    addItem(name: string) {
      console.log(name, '---');
      this.rawItems.push(name)
      console.log(this.rawItems);
    },
    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) {
        this.rawItems.splice(i, 1)
      }
    },
    async purchaseItems() {
      console.log("purchasing", this.items);
      if (this.items instanceof Array) {
        const n = this.items.length
        this.rawItems = []
        return n
      }

    }
  }
})
