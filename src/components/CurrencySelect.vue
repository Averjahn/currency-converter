<template>
<el-dropdown placement="bottom">
    <el-button type="warning"> {{ selectedCurrency }} </el-button>
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item v-for="currency in currencies" :key="currency" @click="selectCurrency(currency)">
            {{ currency }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const selectedCurrency = ref(props.modelValue)
const currencies = ref(['RUB', 'USD', 'EUR'])

const selectCurrency = (currency) => {
    selectedCurrency.value = currency
    emit('update:modelValue', currency)
}

watch(selectedCurrency, (newCurrency) => {
    emit('update:modelValue', newCurrency)
})
</script>
<style>
.el-button {
    border-radius: 0% !important;
    height: 34px !important;
}
</style>