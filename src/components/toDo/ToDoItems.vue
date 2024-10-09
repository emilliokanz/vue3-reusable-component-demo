<script setup lang="ts">
import {ToDoList} from './toDo.types';


const props = defineProps<{
    data: ToDoList
}>();

const emits = defineEmits({
    data: String
})

function emitData(){
    emits('data', props.data.id)
    console.log(`Id of to do ${props.data.id}`)
}


</script>
<template>
<button type="button" class="text-left rounded px-4 py-2 border border-solid border-gray-200 shadow-md" @click="emitData">
    {{ data.title }}
</button>
</template>