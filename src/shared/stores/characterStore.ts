import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICharacter, ICharacterParams } from '../types/character';
import { characterService } from '../services/characterService';

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
    try {
      const params: ICharacterParams = {
        page: numberPage.value,
      };
      if (queryName.value) params.name = queryName.value;
      if (queryStatus.value) params.status = queryStatus.value;
      if (querySpecies.value) params.species = querySpecies.value;
      if (queryGender.value) params.gender = queryGender.value;

      console.log('Paramentos: ' + params);

      const res = await characterService.getCharacters(params);
      console.log(res);
      characters.value = res.data.results;
      totalPages.value = res.data.info.pages;
      totalCharacters.value = res.data.info.count;
      error.value = '';

    } catch (e) {
      console.error('Erro ao buscar personagens: ' + e);
      error.value = 'Nenhum personagem encontrado ou erro no servidor';
      characters.value = [];
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
