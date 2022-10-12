<template>
    <div class="mt-16">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-3xl mb-4">Not Found</h1>
            <p class="text-xl">
                Oops we counldn't find that page. Try going
                <router-link :to="{ name: 'home' }" class="text-blue-500 font-bold">Home</router-link>
            </p>
        </div>
        <div class="w-full flex justify-center">
            <img src="src/assets/404.svg" alt="not found" class="w-1/3">
        </div>
    </div>
</template>