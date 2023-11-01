import './App.css'
import { useState } from 'react'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  name: string
}

const INITIAL_ITEMS: Item[] = [
  { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 1' },
  { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 2' },
  { id: crypto.randomUUID(), timestamp: Date.now(), name: 'Elemento 3' },
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput) return
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      name: input.value,
    }
    setItems([...items, newItem])
    input.value = ''
  }

  const handleDelete = (id: ItemId) => () => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <main>
      
      <aside>
      <h1>Prueba técnica React</h1>

      <h2>Añadir y eliminar elementos</h2>
      
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input name="item" type="text" required placeholder='Nombre' />
          </label>

          <button>Añadir</button>
        </form>
      </aside>

      <section>
        <h2>Lista</h2>
        {
          items.length === 0 ? <p>No hay elementos</p> : 
          <ul>
            {
              items.map(item => {
                return (
                  <li key={item.id}>
                    {item.name}
                    <button onClick={handleDelete(item.id)}>Eliminar</button>
                  </li>
                )
              })
            }
          </ul>
        }
      </section>
    </main>
  )
}

export default App
