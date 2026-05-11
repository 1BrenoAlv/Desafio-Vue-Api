import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICharacter, ICharacterParams } from '../types/character';
import { characterService } from '../services/characterService';
import axios from 'axios';

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<ICharacter[]>([]);
  const numberPage = ref<number>(1);
  const totalCharacters = ref<number>(0);
  const totalPages = ref<number>(0);
  const isLoading = ref<boolean>(false);
  const error = ref<string>('');
  const queryName = ref<string>('');
  const queryStatus = ref<string>('');
  const querySpecies = ref<string>('');
  const queryGender = ref<string>('');

  const fetchCharacters = async (): Promise<void> => {
    isLoading.value = true;
    error.value = '';
    try {
      const params: ICharacterParams = {
        page: numberPage.value,
      };
      if (queryName.value) params.name = queryName.value;
      if (queryStatus.value) params.status = queryStatus.value;
      if (querySpecies.value) params.species = querySpecies.value;
      if (queryGender.value) params.gender = queryGender.value;


      const res = await characterService.getCharacters(params);
      characters.value = res.data.results;
      totalPages.value = res.data.info.pages;
      totalCharacters.value = res.data.info.count;
      error.value = '';
    } catch (e) {
      characters.value = [];
      totalPages.value = 0;
      totalCharacters.value = 0;
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 404) {
          error.value = 'Nenhum personagem encontrado com esses filtros';
        } else if (e.response) {
          error.value = `Erro no servidor: ${e.response.status}. Tente novamente mais tarde.`;
        } else {
          error.value = 'Erro de conexão. Verifique sua internet.';
        }
      }
      console.error('Erro desconhecido: ' + e);
      error.value = 'Ocorreu um erro inesperado.';
    } finally {
      isLoading.value = false;
    }
  };

  const applyFilter = (): void => {
    numberPage.value = 1;
    fetchCharacters();
  };

  const clearFilters = (): void => {
    queryName.value = '';
    queryStatus.value = '';
    querySpecies.value = '';
    queryGender.value = '';
    fetchCharacters();
  };

  const nextPage = (): void => {
    numberPage.value++;
    fetchCharacters();
  };
  const prevPage = (): void => {
    if (numberPage.value > 1) {
      numberPage.value--;
      fetchCharacters();
    }
  };

  return {
    characters,
    numberPage, totalCharacters, totalPages, isLoading, error, queryName, queryGender, querySpecies, queryStatus, fetchCharacters, nextPage, prevPage, applyFilter, clearFilters
  };
});
