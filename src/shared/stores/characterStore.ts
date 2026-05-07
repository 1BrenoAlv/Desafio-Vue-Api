import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICharacter } from '../types/character';
import { characterService } from '../services/characterService';

export const useCharacterStore = defineStore('character' , ()=>{
const characters = ref<ICharacter[]>([]);
  const numberPage = ref<number>(1);
  const totalCharacters = ref<number>(0);
  const totalPages = ref<number>(0);
  const isLoading = ref<boolean>(false);

  const fetchCharacters= async ():Promise<void> => {
    try{
      const  res  = await characterService.getCharacters(numberPage.value);
      console.log(res);
      characters.value = res.data.results;
      totalPages.value = res.data.info.pages;
      totalCharacters.value = res.data.info.count;

    }catch(e){
      console.error('Erro ao buscar personagens: '+e);
    }finally{
      isLoading.value = false;
    }
  };

  const nextPage = (): void => {
  numberPage.value++;
  fetchCharacters();
};
const prevPage = (): void => {
  if(numberPage.value > 1){
  numberPage.value--;
  fetchCharacters();
  }
};

  return{
    characters,
    numberPage,totalCharacters,totalPages,isLoading,fetchCharacters,nextPage,prevPage
  };
});
