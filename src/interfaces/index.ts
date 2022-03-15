export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  base_experience: string;
  id: number;
  name: string;
  sprite: string;
  height: number;
  species: string;
  weight: number;
  types: Array<Type>;
  stats: Stat[];
}
