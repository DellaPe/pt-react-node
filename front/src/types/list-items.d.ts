export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface ItemType {
  id: ItemId
  timestamp: number
  name: string
}

export type ListItemsType = Item[]

export type HandleDeleteItemType = (id: ItemId) => () => void
