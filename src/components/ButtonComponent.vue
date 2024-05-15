<script setup>

const emits = defineEmits([
    'onClick'
])

</script>
<template>
    <div class="btn" :@click="emits('onClick')">
        <slot />
    </div>
</template>