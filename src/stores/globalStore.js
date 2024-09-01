import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {

    const activeCurrency = ref('RUB')
    const currencyRates = ref()

  return { activeCurrency }
})
