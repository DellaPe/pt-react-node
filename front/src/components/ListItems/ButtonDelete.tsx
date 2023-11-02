import { type FC } from 'react'
import { type HandleDeleteItemType, type ItemId } from '../../types/list-items'

interface Props {
  id: ItemId
  handleDelete: HandleDeleteItemType
}

export const ButtonDelete: FC<Props> = ({ id, handleDelete }) => {
  return (
    <button onClick={handleDelete(id)}>Eliminar</button>
  )
}
