<template>
    <div>
        <div class="pt-10 pl-10">
            <GoBack />
        </div>
        <section>
            <div class="flex justify-center text-2xl pb-14 ">
                <h1>{{destination.name}}</h1>
            </div>
            <div class="flex w-full justify-center">
                <div>
                    <img :src="`/src/assets/${destination.image}`" :alt="destination.name">
                </div>
                <div class="w-1/2 ml-10">
                    {{ destination.description }}
                </div>
            </div>
        </section>
        <section>
            <div class="text-center text-2xl pb-14 pt-24">
                <h2>Top experiences in {{ destination.name }}</h2>
            </div>
            <div class="flex justify-center">
                <div class="flex justify-between w-3/4">
                    <div v-for="experience in destination.experiences" :key="experience.slug" class="relative bg-black">
                        <router-link
                        :to="{
                            name: 'experienceDetails',
                            params: { experienceSlug: experience.slug }
                        }">
                            <img :src="`/src/assets/${experience.image}`" :alt="experience.name" class="w-80 opacity-60">
                            <span class="absolute top-1/2 left-1/2 text-2xl font-bold translate-text">
                                {{ experience.name }}
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
            <RouterView :key="$route.path" />
        </section>
    </div>
</template>
<script>
import store  from '../store'
import GoBack from'../components/GoBack.vue'

export default {
    components:{
    GoBack,
},
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.slug == this.slug
            )
        }
    }
}
</script>

<style>
.translate-text {
    transform: translate(-50%, -50%);
}
</style>