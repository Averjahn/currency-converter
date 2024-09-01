<template>
  <div>
    <Header />
      <div class="main-container">
        <router-view />
      </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref, onMounted, computed, watch } from 'vue'
import {useGlobalStore} from '@/stores/globalStore'

const globalStore = useGlobalStore()
const allRates = ref()

onMounted(async () => {
    const response = await fetch('https://status.neuralgeneration.com/api/currency')
    allRates.value = await response.json()

    allRates.value = Object.fromEntries(
        Object.entries(allRates.value).filter(([key]) => 
            (/(usd|rub|eur)/.test(key) && /(usd|rub|eur)/.test(key.replace(/usd|rub|eur/, '')))
        )
    )

    globalStore.currencyRates = allRates.value
})
</script>
<style>
body {
    margin: 0;
}
.main-container{
  margin-left: auto;
  margin-right: auto;
  width: 213px;
}
</style>
