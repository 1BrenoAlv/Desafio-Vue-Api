const statusDict: Record<string, string> = {
  Alive: 'Vivo',
  Dead: 'Morto',
  unknown: 'Desconhecido',
};
const genderDict: Record<string, string> = {
  Male: 'Masculino',
  Female: 'Feminino',
  Genderless: 'Sem Gênero',
  unknown: 'Desconhecido',
};

const speciesDict: Record<string, string> = {
  Human: 'Humano',
  Alien: 'Alienígena',
  Humanoid: 'Humanoide',
  Poopybutthole: 'Bunda-Cagada',
  Mythological: 'Mitológico',
  Animal: 'Animal',
  Robot: 'Robô',
  Cronenberg: 'Cronenberg',
  Disease: 'Doença',
  unknown: 'Desconhecido',
};

export const translateStatus = (status: string): string => {
  return statusDict[status] || status;
};

export const translateGender = (gender: string): string => {
  return genderDict[gender] || gender;
};

export const translateSpecies = (species: string): string => {
  return speciesDict[species] || species;
};
