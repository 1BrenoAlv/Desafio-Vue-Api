<script lang="ts" setup>
import ModalCharacter from '@/shared/components/ModalCharacter.vue';
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
</script>
<template>
  <div class="flex">
    <SideBar />
    <div class="flex-1">
      <div v-if="error" class="h-full flex justify-center items-center">
        <span class="text-red-600 font-bold">{{ error }}</span>
      </div>
      <div v-else-if="isLoading" class="h-full flex justify-center items-center">
        <span>Carregando 👀</span>
      </div>
      <div v-else class="p-4">
        <div>
          <ul class="flex flex-wrap gap-4">
            <li v-for="char in characters" :key="char.id" @click="handleOpenModal(char.id)">

              <img :src="char.image" alt="">
              <span>{{ char.name }}</span>
            </li>
          </ul>
          <ModalCharacter v-model="isModalOpen" />
        </div>

        <div class="p-5 flex gap-3 justify-end">
          <span>{{ numberPage }} de {{ totalPages }}</span>
          <span>{{ totalCharacters }} Personagens</span>
          <button v-if="numberPage > 1" class="px-5 py-2 bg-blue-950 text-white rounded-xl"
            @click="prevPage">Anterior</button>
          <button v-if="!(numberPage === 42)" class="px-5 py-2 bg-blue-950 text-white rounded-xl"
            @click="nextPage">Proxima</button>
        </div>
      </div>
    </div>

  </div>

</template>
