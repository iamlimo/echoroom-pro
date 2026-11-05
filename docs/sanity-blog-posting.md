# Posting blogs with Sanity

This project uses Sanity as the content source for the blog. The front end reads published `post` documents from the Sanity dataset and renders them on the blog index and blog detail pages.

## Where the blog is wired up

The key pieces are:

- Blog list query: [src/lib/sanity.ts](../src/lib/sanity.ts)
- Blog detail route: [src/app/pages/BlogPost.tsx](../src/app/pages/BlogPost.tsx)
- Blog index page: [src/app/pages/Blog.tsx](../src/app/pages/Blog.tsx)
- Post schema: [src/app/pages/studio/schemaTypes/post.ts](../src/app/pages/studio/schemaTypes/post.ts)
- Studio config: [src/app/pages/studio/sanity.config.ts](../src/app/pages/studio/sanity.config.ts)

The front end specifically queries documents where:

- `_type == "post"`
- `status == "published"`
- `slug.current` is defined

That means a post will appear on the public site only after it is published and has a valid slug.

## Sanity content model

The blog schema is defined as a document type named `post` with these fields:

- `title` — required string
- `slug` — required slug generated from the title
- `status` — `draft` or `published`
- `excerpt` — short summary
- `author` — optional string
- `category` — optional category from a fixed list
- `publishedAt` — date/time field
- `coverImage` — optional image
- `body` — Sanity Portable Text rich text block array
- `featured` — optional boolean flag

The schema lives in [src/app/pages/studio/schemaTypes/post.ts](../src/app/pages/studio/schemaTypes/post.ts).

## How to create a blog post

### 1) Open the Sanity Studio

From the Studio folder:

```bash
cd src/app/pages/studio
npm install
npm run dev
```

Then open the local Sanity Studio in the browser and sign in to the project.

> The project is configured with `projectId: "hwtmiha0"` and dataset `"production"`, so the studio is connected to the live content dataset for this site.

### 2) Create a new document

In Sanity Studio:

- Go to the `Post` document type
- Click `Create document`
- Enter the blog article content

### 3) Fill in the required fields

For the post to appear on the website, make sure these are correct:

- `Title` — article headline
- `Slug` — auto-generated from the title or set manually
- `Status` — set to `Published` when ready
- `Excerpt` — short teaser text for the blog list
- `Published At` — date and time for the article
- `Body` — main article content in rich text blocks

The front-end query does not require a cover image to publish, but the blog cards and detail pages expect the image to be added when available.

### 4) Save and publish

After filling in the fields:

- Save the draft
- Change the status to `Published`
- Publish the document

Once published, the site should reflect it on the `/blog` page automatically.

## Blog rendering behavior

The site uses:

- `getPublishedPosts()` in [src/lib/sanity.ts](../src/lib/sanity.ts) to fetch all published posts
- `getPostBySlug(slug)` to load one article by slug
- `PortableText` in [src/components/PortableText.tsx](../src/components/PortableText.tsx) to render the rich-text body

Important behavior:

- The blog list page uses `status == "published"` and `defined(slug.current)`
- The blog detail page uses the route `/blog/:slug`
- If a post is in draft mode or missing a slug, it will not show on the public site

## Rich text body tips

The blog content is stored as a Sanity Portable Text array in the `body` field. The front end supports:

- paragraphs
- headings
- list items
- links
- inline emphasis and code
- images

When adding images, keep them in the `body` as image blocks or add a `coverImage` for the blog card and article hero.

## Troubleshooting

If a post does not appear:

1. Check that the document is set to `Published` not `Draft`.
2. Confirm the slug exists and is not empty.
3. Confirm the document is in the `production` dataset.
4. Check the front-end query in [src/lib/sanity.ts](../src/lib/sanity.ts) matches the document type and field names.

If you are using preview mode, the app also supports a preview query via the `preview` flag and `sanity_preview` cookie. The preview path is not required for normal publishing.

## Recommended workflow

A good publishing flow is:

1. Draft the article in Sanity Studio
2. Add title, slug, excerpt, cover image, and rich text body
3. Set `publishedAt` to the correct date
4. Change `status` to `Published`
5. Confirm the article appears at `/blog` and `/blog/<slug>`

This keeps the blog content editor-friendly while letting the website stay fully data-driven from Sanity.
