<template>
<div>
    <h1 class="title">Курсы валют</h1>
    <ul class="rates-list">
        <li v-for="(rate, currency) in rates" :key="currency">
            1 {{ globalStore.activeCurrency }} = {{ getRate(rate) }} {{ getCurrencyName(currency) }}
        </li>
    </ul>
</div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import {useGlobalStore} from '@/stores/globalStore'

const globalStore = useGlobalStore()

const allRates = ref()
const rates = ref({})

onMounted( async () => {

    const response = await fetch('https://status.neuralgeneration.com/api/currency')
    allRates.value = await response.json()

    allRates.value = Object.fromEntries(
        Object.entries(allRates.value).filter(([key]) => 
            (/(usd|rub|eur)/.test(key) && /(usd|rub|eur)/.test(key.replace(/usd|rub|eur/, '')))
        )
    )

    updateRates() // initial filtering
})

watch(() => globalStore.activeCurrency, () => {
    updateRates()
})

const updateRates = () => {
    rates.value = Object.fromEntries(
        Object.entries(allRates.value).filter(([key]) => 
            key.split('-')[0].toLowerCase() === globalStore.activeCurrency.toLowerCase()
        )
    )
    console.log(rates.value)
}

const getRate = computed(() => (target) => {
    return target.toFixed(2)
})

const getCurrencyName = computed(() => (currency) => {
    return currency.split('-')[1].toUpperCase()
})
</script>
<style>
.rates-list {
    list-style: none; /* Убрал стандартные стили (точка слева от li) */
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
}

.rates-list li {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.rates-list li:last-child {
    border-bottom: none;
}
</style>