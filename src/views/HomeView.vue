<template>
  <main class="text-blue-400 text-xl">
    <div class="text-white flex justify-center py-14 text-2xl">All Destinations</div>
    <div class="flex justify-around">
      <div v-for="destination in destinations" :key="destination.name" class="flex flex-col items-center">
        <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }" class="mb-4">
          <h2>{{destination.name}}</h2>
        </router-link>
        <figure>
          <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
            <img :src="`src/assets/${destination.image}`" :alt="destination.name" class="w-64">
          </router-link>
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
import store from '../store'
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>