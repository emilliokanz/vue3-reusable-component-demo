<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import ModalComponent from '../components/ModalComponent.vue'

import IconDocumentation from '../components/icons/IconDocumentation.vue';
import { onMounted, ref } from 'vue';

const cardTitle = "Employee Card"
const cardContent = ['Jonathan Joestar', 'Application Management']
const greeting = 'Helo world'

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

</script>

<template>
  <div class="flex justify-center">
    <CardComponent :title="cardTitle" :content="cardContent">
      <ButtonComponent @on-click="openModal">
        <a>Details</a>
        <IconDocumentation></IconDocumentation>
      </ButtonComponent>
    </CardComponent>
  </div>
  <div class="modal" :class="{ 'modal-open': showModal }">
    <ModalComponent @on-close="closeModal"></ModalComponent>
  </div>
</template>

