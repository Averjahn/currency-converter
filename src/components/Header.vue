<template>
    <header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
          <el-menu-item index="1">
              <router-link to="/" style="text-decoration: none;">Главная</router-link>
          </el-menu-item>
  
          <el-menu-item index="2">
              <router-link to="/convert" style="text-decoration: none;">Конвертация</router-link>
          </el-menu-item>
  
          <CurrencySelect class="currency-btn" v-model="globalStore.activeCurrency" />
      </el-menu>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CurrencySelect from '@/components/CurrencySelect.vue'
  import { useGlobalStore } from '@/stores/globalStore'
  
  const globalStore = useGlobalStore()
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style scoped>
  header {
      display: flex;
      flex-direction: column;
  }
  .el-menu-demo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif; /* Изменил шрифт на Arial */
  }
  
  .currency-btn{
      margin-left: 2vw;
  }
  
  .el-menu-item a {
      text-decoration: none; /* Убрал подчеркивание у текстов меню */
  }
  </style>