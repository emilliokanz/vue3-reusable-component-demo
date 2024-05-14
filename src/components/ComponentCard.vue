<script setup>

const props = defineProps({
    title: String
})

</script>
<template>
    <div class="card">
        <a>{{ props.title }}</a>
        <slot />
    </div>
</template>
<style scoped>
    .card {
        border-radius: 10px;
        padding-inline: 10px;
        padding-block: 5px;
        background-color: white;
        max-width: 30vw;

    }


</style>