import { type ItemId, type ItemType, type ListItemsType } from '../types/list-items'
import { useState } from 'react'
import { useSEO } from './useSEO'

const INITIAL_ITEMS: ListItemsType = [
  // Comentado para que no aparezcan elementos por defecto (Test EE)
  // { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 1' },
  // { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 2' },
  // { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 3' },
]

export const useItems = () => {
  const [items, setItems] = useState(INITIAL_ITEMS)
  useSEO({ title: `[${items.length}} Prueba técnica`, descrition: 'Lista de elementos' })

  const addItem = (newName: string) => {
    const newItem: ItemType = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      name: newName
    }
    setItems([...items, newItem])
  }

  const deleteItem = (id: ItemId) => {
    setItems(items.filter(item => item.id !== id))
  }

  return { items, addItem, deleteItem }
}
