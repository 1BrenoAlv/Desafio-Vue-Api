import { defineStore } from 'pinia';
import type { ICharacter } from '../types/character';
import { ref } from 'vue';
import { characterService } from '../services/characterService';

export const useCharacterModalStore = defineStore('modalCharacter', () => {
  const character = ref<ICharacter | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string>('');

  const fetchCharacterById = async (id: number): Promise<void> => {
    try {
      isLoading.value = true;
      const char = await characterService.getCharacterByIdService(id);
      console.log(char);
      character.value = char;
    } catch (e) {
      console.error(e);
      error.value = 'Não foi possivel abrir o modal';
    } finally {
      isLoading.value = false;
    }

  };

  const clearCharacter = (): void => {
    character.value = null;
  };
  return {
    character, isLoading, error, fetchCharacterById, clearCharacter
  };
});


