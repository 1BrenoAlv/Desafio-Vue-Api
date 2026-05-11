<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal';
import { useCharacterModalStore } from '../stores/characterModalStore';
import { defineEmits, defineProps } from 'vue';

defineProps<{ modelValue: boolean }>();

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

const modalStore = useCharacterModalStore();

const getStatus = (status?: string): string => {
  if (status === 'Alive') {
    return 'bg-green-100 text-green-800';
  } else if (status === 'Dead') {
    return 'bg-red-100 text-red-800';
  }
  return 'bg-slate-200 text-slate-700';
};

</script>

<template>
  <VueFinalModal class="flex justify-center items-center p-4" :model-value="modelValue" overlay-transition="vfm-fade"
    content-transition="vfm-fade" @update:model-value="emit('update:modelValue', $event)"
    @closed="modalStore.clearCharacter()">
    <div class="bg-[#F0EBD8] rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative text-slate-800">

      <div v-if="modalStore.isLoading" class="flex justify-center items-center p-20">
        <span class="text-lg font-medium text-slate-600 animate-pulse">{{ modalStore.error }}</span>
      </div>

      <div v-else-if="modalStore.character" class="flex flex-col md:flex-row">

        <div class="w-full md:w-2/5 flex-shrink-0">
          <img :src="modalStore.character.image" :alt="modalStore.character.name"
            class="w-full h-full object-cover aspect-square md:aspect-auto">
        </div>
        <div class="w-full md:w-3/5 p-6 flex flex-col gap-4">
          <div>
            <h2 class="text-3xl font-extrabold text-slate-950 mb-2">{{ modalStore.character.name }}</h2>

            <div class="flex gap-2 text-sm">
              <span class="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full"
                :class="getStatus(modalStore.character?.status)">
                {{ modalStore.character.status }}
              </span>
              <span class="bg-slate-100 text-slate-600 font-medium px-3 py-1 rounded-full">
                {{ modalStore.character.species }} • {{ modalStore.character.gender }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-3 mt-1 text-sm border-slate-200 pt-4">
            <div class="flex justify-between items-center">
              <span class="font-bold text-slate-500 uppercase text-xs tracking-wider">Origem</span>
              <span class="text-base font-semibold text-slate-900">{{ modalStore.character.origin?.name }}</span>
            </div>
            <div class="flex justify-between items-center border-slate-100 pt-3">
              <span class="font-bold text-slate-500 uppercase text-xs tracking-wider">Localização Atual</span>
              <span class="text-base font-semibold text-slate-900">{{ modalStore.character.location?.name }}</span>
            </div>
            <div class="flex justify-between items-center border-slate-100 pt-3">
              <span class="font-bold text-slate-500 uppercase text-xs tracking-wider">Total de Episódios</span>
              <span class="text-base font-semibold text-slate-900">{{ modalStore.character.episode?.length }}</span>
            </div>
          </div>

          <div class="flex w-full mt-4">
            <button
              class="bg-[#da6b5b] hover:bg-[#c0594a] transition-colors text-white py-3 rounded-xl font-bold w-full shadow-md"
              @click="emit('update:modelValue', false)">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
