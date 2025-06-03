<script setup>
import LinhaComponent from "../components/LinhaComponent.vue"
</script>

<template>
  <q-page class="flex flex-center">
    <LinhaComponent/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaginaLinhas'
});
</script>
