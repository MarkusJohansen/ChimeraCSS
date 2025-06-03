<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="app">
    <h1>Vue Counter Demo</h1>
    <div class="card">
      <button @click="count++">
        Count is {{ count }}
      </button>
    </div>
  </div>
</template>


