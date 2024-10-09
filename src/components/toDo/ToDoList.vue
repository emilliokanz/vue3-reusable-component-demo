<script setup lang="ts">
import axios from 'axios';
import { ToDoList } from './toDo.types';
import { onMounted, ref } from 'vue';
import ToDoItems from './ToDoItems.vue';

const items = ref<ToDoList[]>([])

    const fetchData = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')

        items.value = (data)
    }

    onMounted(() => {
        fetchData()
    })

</script>
<template>
    <div class="text-left rounded px-4 py-2 border border-solid border-gray-200 shadow-md">
        <ToDoItems :data="item" v-for="item in items" data-test="items"> 
        </ToDoItems>
    </div>
        
</template>