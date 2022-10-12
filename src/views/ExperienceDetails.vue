<template>
    <section class="flex justify-center pb-20">
        <div class="w-3/4">
            <h1 class="text-center pb-14 pt-24 text-2xl">Experiences</h1>
            <div class="flex">
                <div class="w-1/3">
                    <img :src="`/src/assets/${experience.image}`" :alt="experience.name">
                </div>
                <div class="w-2/3">
                    <h2 class="text-xl font-bold mb-5">{{ experience.name }}</h2>
                    <p>{{ experience.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import store from '../store';
export default {
    props: {
        slug: {
            type: String,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination() {
            return store.destinations.find(
                destination => destination.slug == this.slug
            );
        },
        experience() {
            return this.destination.experiences.find(
                experience => experience.slug == this.experienceSlug
            );
        }
    }
}
</script>