import { useAPI } from '@services/api'

export const getHighlightMangas = async () => {
  const api = useAPI()
  const response = await api.get('/highlightedSeries')
  return response.data
}
