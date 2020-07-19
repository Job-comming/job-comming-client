import useSWR from 'swr'
import axios from 'axios'
import { API_BASE_URL } from '../config'

export default function useRequest(
  request: any,
  { initialData, ...config }: any = {},
) {
  return useSWR(
    request && JSON.stringify(request),
    () =>
      axios((`${API_BASE_URL}${request}` as any) || {}).then(
        (response) => response.data,
      ),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData,
      },
    },
  )
}
