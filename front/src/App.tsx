import { type JSX } from 'react'
import './App.css'

import { ListItemsIndex } from './components/ListItems'
import { useItems } from './hooks/useItmes'
import { type ItemId } from './types/list-items'

function App (): JSX.Element {
  const { items, deleteItem, addItem } = useItems()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput) return
    addItem(input.value)
    input.value = ''
  }

  const handleDelete = (id: ItemId) => () => {
    deleteItem(id)
  }

  return (
    <main>

      <aside>
      <h1>Prueba técnica React</h1>

      <h2>Añadir y eliminar elementos</h2>

        <form aria-label='Add element' onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
          </label>

          <input name="item" type="text" required placeholder='Nombre' />
          <button>Añadir</button>
        </form>
      </aside>

      <ListItemsIndex items={items} handleDelete={handleDelete} />
    </main>
  )
}

export default App
