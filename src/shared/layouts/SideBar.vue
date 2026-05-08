<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characterStore';
import { toast } from 'vue-sonner';

const characterStore = useCharacterStore();
const {
  queryName, queryStatus, querySpecies, queryGender
} = storeToRefs(characterStore);

const { applyFilter, clearFilters } = characterStore;

const handleClearFilters = (): void => {
  clearFilters();
  toast.info('Filtos Limpidos');
};

</script>
<template>
  <div class=" flex flex-col min-h-screen min-w-[300px] bg-blue-950 rounded-r-2xl">
    <div class="flex flex-col p-3">
      <input v-model="queryName" type="text" name="" placeholder="Nome do personagem..."
        @keyup.enter="characterStore.applyFilter">
      <select v-model="queryStatus" name="">
        <option value="">Todos Status</option>
        <option value="alive">Vivo</option>
        <option value="dead">Morto</option>
        <option value="unknown">Desconhecido</option>
      </select>
      <select id="" v-model="querySpecies" name="">
        <option value="" selected>Todas as espécies</option>
        <option value="human">Humano</option>
        <option value="alien">Alienígena</option>
        <option value="humanoid">Humanoide</option>
        <option value="poopybutthole">Bunda-Cagada</option>
        <option value="mythological">Mitológico</option>
        <option value="animal">Animal</option>
        <option value="robot">Robô</option>
        <option value="cronenberg">Cronenberg</option>
        <option value="disease">Doença</option>
        <option value="unknown">Desconhecido</option>
      </select>
      <select id="" v-model="queryGender" name="">
        <option value="" selected>Todos os gêneros</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="genderless">Sem Gênero</option>
        <option value="unknown">Desconhecido</option>
      </select>
      <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2" @click="applyFilter">
        Buscar Personagens
      </button>
      <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
        @click="handleClearFilters()">
        Limpar Filtros
      </button>
    </div>
  </div>
</template>
