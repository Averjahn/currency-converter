<template>
    <div>
      <input class="input" type="number" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  </script>
  <style scoped>
  .input{
    height: 28px;
    border: 2px solid #e6a23c;
    border-right: 0;
  }
  </style>