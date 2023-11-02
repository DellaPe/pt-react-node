import { type FC } from 'react'
import { type HandleDeleteItemType, type ListItemsType } from '../../types/list-items'
import { Item } from './Item'

interface Props {
  items: ListItemsType
  handleDelete: HandleDeleteItemType
}

export const ListItems: FC<Props> = ({ items, handleDelete }) => {
  return (
    <ul>
      {
        items.map(item => {
          return (
            <Item key={item.id} item={item} handleDelete={handleDelete} />
          )
        })
      }
    </ul>
  )
}
