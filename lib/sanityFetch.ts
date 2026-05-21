import { client } from './sanity'

export async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {}
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'production' ? 60 : 0,
    },
  })
}
