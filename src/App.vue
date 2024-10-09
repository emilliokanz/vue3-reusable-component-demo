<script setup>
import Index from './views/Index.vue'
import ArticleComponent from './components/ArticleComponent.vue'
import ToDoList from './components/toDo/ToDoList.vue';
</script>

<template>
  <!-- <Index></Index> -->
  <header class="text-2xl text-center my-8">
    Hellow World
  </header>
  <body>
    <div>
      <ToDoList></ToDoList>
      <!-- <ArticleComponent /> -->
      <!-- <div class="card card-bordered bg-slate-200 text-black text-bold">
        <div class="cart-title text-xl ml-5 mt-5">Article Title</div>
        <div class="divider primary border-white"></div>
        <div class="card-body">Article Content</div>
        <div class="flex justify-end">
          <div class="btn btn-wide bg-slate-400 me-5 mb-3 text-white">
            Details
          </div>

        </div>
      </div> -->
    </div>
  </body>
</template>

<style scoped>
</style>
