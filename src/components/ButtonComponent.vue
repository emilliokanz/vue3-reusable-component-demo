<script setup>

const emits = defineEmits([
    'on-click'
])

</script>
<template>
    <button class="btn" @click="emits('on-click')">
        <slot />
    </button>
</template>