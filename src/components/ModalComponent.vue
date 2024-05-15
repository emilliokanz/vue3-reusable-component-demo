<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    openModal: Boolean
})

const open = ref(false)

onMounted(() => {
    open = props.openModal
})
</script>

<template>
  <Teleport to="body">
  <div v-if="open" class="modal">
    <slot />
    <button @click="open = false">Close</button>
  </div>
</Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>