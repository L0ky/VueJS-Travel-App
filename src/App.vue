<template>
  <div>
    <header>
      <div class="">
        <TheNavigation />
        <transition name="fade">
          <RouterView :key="$route.path"/>
        </transition>
      </div>
    </header>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>



