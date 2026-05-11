import { api } from '@services/config/api.config';
import type { ICharacterResponse, ICharacterParams, ICharacter } from '../types/character';

export const characterService = {
  getCharacters(params: ICharacterParams): Promise<ICharacterResponse> {
    return api.get('/character', { params });
  },
  async getCharacterByIdService(id: number): Promise<ICharacter> {
    const resp = await api.get<ICharacter>('/character/' + id);
    return resp.data;
  }
};
