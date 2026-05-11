<script lang="ts" setup>
import ModalCharacter from '@/shared/components/ModalCharacter.vue';
import HeaderLayout from '@/shared/layouts/HeaderLayout.vue';
import SideBar from '@/shared/layouts/SideBar.vue';
import { useCharacterModalStore } from '@/shared/stores/characterModalStore';
import { useCharacterStore } from '@/shared/stores/characterStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';


const characterStore = useCharacterStore();
const modalStore = useCharacterModalStore();
const {
  characters,
  isLoading,
  numberPage,
  totalPages,
  totalCharacters, error
} = storeToRefs(characterStore);

const { nextPage, prevPage, fetchCharacters } = characterStore;

const isModalOpen = ref(false);
const handleOpenModal = (id: number): void => {
  isModalOpen.value = true;
  modalStore.fetchCharacterById(id);
  console.log('clqiquei' + id);
};

onMounted(() => {
  if (characters.value.length === 0) {
    fetchCharacters();
  }
});

const getStatus = (status: string): string => {
  if (status === 'Alive') return 'bg-green-500';
  if (status === 'Dead') return 'bg-red-500';
  return 'bg-gray-400';
};
</script>
<template>
  <div class="h-screen overflow-hidden flex flex-col bg-[#f4f1e1]">
    <HeaderLayout />
    <div class="flex flex-1 overflow-hidden">
      <SideBar />
      <main class="flex-1 overflow-y-auto">
        <div v-if="error" class="h-full flex justify-center items-center">
          <span class="text-red-600 font-bold">{{ error }}</span>
        </div>
        <div v-else-if="isLoading" class="h-full flex justify-center items-center">
          <span>Carregando 👀</span>
        </div>
        <div v-else class="p-10  min-h-full flex flex-col justify-between ">
          <div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              <li v-for="char in characters" :key="char.id"
                class="bg-[#efead6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#e3ddc4] flex flex-col"
                @click="handleOpenModal(char.id)">
                <div class="w-full">
                  <img :src="char.image" :alt="char.name" class="w-full aspect-square object-cover">
                </div>

                <div class="p-4 flex flex-col">
                  <span class="font-bold text-lg text-slate-800 truncate mb-1" :title="char.name">
                    {{ char.name }}
                  </span>

                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" :class="getStatus(char.status)"></span>

                    <p class="text-slate-600 text-sm truncate">
                      {{ char.status }} - {{ char.species }}
                    </p>
                  </div>
                </div>
              </li>

            </ul>
            <ModalCharacter v-model="isModalOpen" />
          </div>

          <div class="bottom-0 left-0 p-5 flex gap-3 justify-end items-center">
            <button v-if="numberPage > 1" :disabled="isLoading" class="px-5 py-2 bg-blue-950 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-600"
              @click="prevPage">Anterior</button>
            <span>{{ numberPage }} de {{ totalPages }}</span>
            <span>{{ totalCharacters }} Personagens</span>
            <div v-if="numberPage < totalPages">
              <button v-if="!(numberPage === 42)" :disabled="isLoading"
                class="px-5 py-2 bg-blue-950 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-600" @click="nextPage">Proxima</button>
            </div>
          </div>
        </div>
      </main>

    </div>

  </div>

</template>
