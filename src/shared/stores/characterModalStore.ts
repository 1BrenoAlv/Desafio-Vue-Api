import { defineStore } from 'pinia';
import type { ICharacter } from '../types/character';
import { ref } from 'vue';
import { characterService } from '../services/characterService';
import axios from 'axios';

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
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 404) {
          error.value = 'Personagem selecionado não encontrado';
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

  const clearCharacter = (): void => {
    character.value = null;
  };
  return {
    character, isLoading, error, fetchCharacterById, clearCharacter
  };
});


