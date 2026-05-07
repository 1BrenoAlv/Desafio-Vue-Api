<script lang="ts" setup>
import SideBar from '@/shared/layouts/SideBar.vue';
import { useCharacterStore } from '@/shared/stores/characterStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const characterStore = useCharacterStore();
const {
  characters,
  isLoading,
  numberPage,
  totalPages,
  totalCharacters
} = storeToRefs(characterStore);

const { nextPage, prevPage, fetchCharacters } = characterStore;

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
      <div v-if="isLoading" class="flex justify-center">
        <span>Carregando 👀</span>
      </div>
      <div v-else class="p-4">
        <div>
          <ul class="flex flex-wrap gap-4">
            <li v-for="char in characters" :key="char.id">
              <img :src="char.image" alt="">
              <span>{{ char.name }}</span>
            </li>
          </ul>
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
