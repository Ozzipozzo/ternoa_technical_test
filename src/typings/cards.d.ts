export type Attributes = {
  trait_type: string;
  value: string;
};

export interface CardsProps {
  imageUrl: string;
  name: string;
  attributes: Attributes[]; // Ajoutez les attributs en tant que prop
}
