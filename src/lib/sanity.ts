import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export type BlogPost = {
  _id: string
  title: string
  slug?: { current?: string }
  excerpt?: string
  body?: unknown[]
  publishedAt?: string
  author?: string
  category?: string
  coverImage?: any
  status?: 'draft' | 'published'
}

export const sanityClient = createClient({
  projectId: 'hwtmiha0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export const previewClient = createClient({
  projectId: 'hwtmiha0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SANITY_PREVIEW_TOKEN) || undefined,
})

const builder = imageUrlBuilder(sanityClient)

export function urlForImage(source: any) {
  if (!source) return ''
  return builder.image(source).width(1200).url()
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`*[_type == "post" && status == "published" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    category,
    status,
    coverImage,
    body
  }`)
}

export async function getPostBySlug(slug: string, preview = false): Promise<BlogPost | null> {
  let client = sanityClient

  if (preview) {
    // Attempt to read a preview token from cookie (set by the serverless preview endpoint)
    let token: string | undefined = undefined
    if (typeof document !== 'undefined') {
      const match = document.cookie.match('(?:^|; )sanity_preview=([^;]*)')
      if (match && match[1]) {
        try {
          token = decodeURIComponent(match[1])
        } catch (e) {
          token = match[1]
        }
      }
    }

    // Fallback to client env token if present
    if (!token && typeof import.meta !== 'undefined') {
      token = (import.meta as any).env?.VITE_SANITY_PREVIEW_TOKEN
    }

    client = createClient({
      projectId: 'hwtmiha0',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-01-01',
      token,
    })
  }

  const result = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    category,
    status,
    coverImage,
    body
  }`, { slug })

  return result ?? null
}
