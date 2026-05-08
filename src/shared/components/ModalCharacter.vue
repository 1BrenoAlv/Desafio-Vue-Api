<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal';
import { useCharacterModalStore } from '../stores/characterModalStore';
import { storeToRefs } from 'pinia';
import { defineEmits, defineProps } from 'vue';

const modalStore = useCharacterModalStore();
defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

</script>
<template>
  <VueFinalModal class="flex justify-center items-center" :model-value="modelValue"
    content-class="bg-blue-950 rounded-2xl w-[60%]  border border-gray-700 relative text-white"
    overlay-transition="vfm-fade" content-transition="vfm-fade" @update:model-value="emit('update:modelValue', $event)"
    @closed="modalStore.clearCharacter()">
    <div v-if="modalStore.isLoading" class="flex justify-center p-10">
      <span>Carregando dados... 🛸</span>
    </div>
    <div v-else class="flex">
      <div class="rounded-2xl">
        <img :src="modalStore.character?.image" alt="" class="rounded-l-2xl">
      </div>
      <div class="flex p-5">

        <h2 class="text-2xl font-bold text-green-400 mb-1"> <p class="text-[13px] font-bold text-gray-400 mb-1">nome:</p>{{ modalStore.character?.name }}</h2>
      </div>
    </div>
  </VueFinalModal>
</template>
