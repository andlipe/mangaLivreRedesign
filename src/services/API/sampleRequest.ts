import { useQuery } from 'react-query'
import { useAPI } from '../api'
import { SAMPLE_KEY } from '../queryKeys'

export const sampleRequest = () => {
  const api = useAPI()

  return useQuery([SAMPLE_KEY], async () => {
    const response = await api.get('/sample')
    return response.data
  })
}
