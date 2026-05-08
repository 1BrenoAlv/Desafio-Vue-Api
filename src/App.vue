<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <Toaster position="top-right" :duration="4000" :visible-toasts="5" rich-colors close-button expand />
  <router-view> </router-view>
  <ModalsContainer />
</template>
