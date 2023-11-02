import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  // test('Should work', () => { // No aporta nada nuevo
  //   const { getByText } = render(<App />)

  //   expect(screen.getByText('Prueba técnica React'))
  //     .toBeDefined()

  //   expect(getByText('Añadir y eliminar elementos'))
  //     .toBeDefined()
  // })
  // Test EE: 
   test('Should add and delete items', async () => {
    render(<App />)
    const user = userEvent.setup()
    
    const input = screen.getByRole('textbox') // un input por defecto tiene role 'textbox'
    expect(input).toBeDefined()
    
    const form = screen.getByRole('form') // Necesita el aria-label
    expect(form).toBeDefined()
    
    
    const button = form.querySelector('button')
    expect(button).toBeDefined()
    
    const textTest = crypto.randomUUID()
    await user.type(input, textTest)
    await user.click(button!)

    const list = screen.getByRole('list')
    expect(list.children.length).toBe(1)

    const item = screen.getByText(textTest)
    expect(item).toBeDefined()

    const deleteButton = item.querySelector('button')
    expect(deleteButton).toBeDefined()

    await user.click(deleteButton!)

    const noResults = screen.getByText('No hay elementos')
    expect(noResults).toBeDefined()
  })
})