interface ItemId {
  id: number;
  itemID: string;
}

export interface CMSFilters {
  id: number;
  search: string | null;
  categories: ItemId[];
  products: ItemId[];
  quantity?: number;
  order: 'Aleatorio' | 'Descendente' | 'Ascendete';
  city: number;
}
