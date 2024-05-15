<script setup>

const props = defineProps({
    title: String,
    content: [String]
})

</script>
<template>
    <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
    <h2 class="card-title">{{ props.title }}</h2>
    <div style="margin-block: -5px;" class="divider"></div>
    <div class="card-content" v-for="content of props.content">
      <div style="margin-block: -5px;">{{content}}</div>
    </div>
    <div class="flex justify-end">
      <slot />
    </div>
  </div>
</div>
</template>
<style scoped>
</style>