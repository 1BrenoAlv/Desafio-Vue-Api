export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string[]
}
export interface ICharacterResponse {
  data: {
    info: {
      count: number;
      pages: number;
    };
    results: ICharacter[];
  }
}

export interface ICharacterParams {
  id?: number,
  page?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}
