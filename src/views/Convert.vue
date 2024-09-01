<template>
    <div>
      <h1 class="title">Конвертация</h1>
      <form>

        <div class="input-button">
            <InputField v-model="amount1" @input="updateAmount1"/>
            <CurrencySelect v-model="currency1" />
        </div>
        <div class="input-button">
            <InputField v-model="amount2" @input="updateAmount2"/>
            <CurrencySelect v-model="currency2" />
        </div>
        
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import InputField from '@/components/InputField.vue'
  import CurrencySelect from '@/components/CurrencySelect.vue'
  import { useGlobalStore } from '@/stores/globalStore'
  
  const globalStore = useGlobalStore()
  
  const amount1 = ref(0)
  const amount2 = ref(0)
  const currency1 = ref('RUB')
  const currency2 = ref('USD')
  let activeWatch = null

  watch([amount1, amount2, currency1, currency2], ([newAmount1, newAmount2, newCurrency1, newCurrency2]) => {
    if (activeWatch === 'amount1') {
      amount2.value = convert(newAmount1, newCurrency1, newCurrency2)
    } else if (activeWatch === 'amount2') {
      amount1.value = convert(newAmount2, newCurrency2, newCurrency1)
    }
  })

  function updateAmount1() {
    activeWatch = 'amount1'
  }

  function updateAmount2() {
    activeWatch = 'amount2'
  }
  
  function convert(amount, fromCurrency, toCurrency) {
    const rate = getRate(fromCurrency, toCurrency)
    return (amount * rate).toFixed(2)
  }
  
  function getRate(fromCurrency, toCurrency) {
    if(fromCurrency == toCurrency){
        return 1
    }
    const rateKey = `${fromCurrency}-${toCurrency}`.toLocaleLowerCase()
    if (globalStore.currencyRates[rateKey]) {
      return globalStore.currencyRates[rateKey]
    } else {
      const inverseRateKey = `${toCurrency}-${fromCurrency}`
      return 1 / globalStore.currencyRates[inverseRateKey]
    }
  }
  </script> 
  <style>
  .input-button{
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
  }
  .title{
    font-family: Arial, sans-serif;
  }
  </style>