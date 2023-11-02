import { type FC } from 'react'
import { type HandleDeleteItemType, type ItemType } from '../../types/list-items'
import { ButtonDelete } from './ButtonDelete'

interface Props {
  item: ItemType
  handleDelete: HandleDeleteItemType
}

export const Item: FC<Props> = ({ item, handleDelete }) => {
  const { id, name } = item
  return (
    <li>
      {name}
      <ButtonDelete id={id} handleDelete={handleDelete} />
    </li>
  )
}
