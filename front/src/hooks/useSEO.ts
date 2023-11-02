import { useEffect } from 'react'

interface UseSEO {
  title: string
  descrition: string
}

export const useSEO = ({ title, descrition }: UseSEO) => {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', descrition)
  }, [title, descrition])
}
