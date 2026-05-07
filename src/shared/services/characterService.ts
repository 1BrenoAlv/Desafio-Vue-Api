import { api } from '@services/config/api.config';
import type { ICharacterResponse } from '../types/character';


export const characterService ={
  getCharacters(page:number): Promise<ICharacterResponse>{
    return api.get(`/character?page=${page}`);
  }
};
