<template>
    <nav class="flex justify-between bg-neutral-900 w-full py-4 drop-shadow-md">
        <router-link to="/">
            <p class="text-xl ml-10">VueJs Travel App</p>
        </router-link>
        <ul class="flex justify-around flex-1">
            <li v-for="destination in destinations" :key="destination.name">
                <router-link :to="{
                    name: 'DestinationDetails',
                    params: { slug: destination.slug }
                }">
                    {{destination.name}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import store from '../store'
export default{
    data(){
        return {
            slug: this.$route.params.slug,
            destinations: store.destinations
        };
    }
};
</script>