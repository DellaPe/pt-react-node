import { type FC } from 'react'
import { type HandleDeleteItemType, type ListItemsType } from '../../types/list-items'
import { ListItems } from './ListItems'

interface Props {
  items: ListItemsType
  handleDelete: HandleDeleteItemType
}

export const ListItemsIndex: FC<Props> = ({ items, handleDelete }) => {
  const isHasItems = items.length > 0

  return (
    <section>
      <h2>Lista</h2>
      {
        !isHasItems
          ? <p>No hay elementos</p>
          : <ListItems items={items} handleDelete={handleDelete} />
      }
    </section>
  )
}
