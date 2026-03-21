# Typellery

A photo gallery app powered by the [Unsplash](https://unsplash.com) API. Browse, search, and explore high-quality images in a masonry grid layout.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite Plus** — Vite-compatible build tooling by VoidZero
- **Chakra UI** — component library
- **TanStack Router** — URL-driven routing
- **TanStack Query** — data fetching & caching
- **Axios** — HTTP client
- **Framer Motion** — animations
- **react-masonry-css** — masonry grid layout

## Getting Started

```bash
pnpm install
pnpm dev
```

Requires a `.env` file with your Unsplash access key:

```
VITE_ACCESS_KEY=your_unsplash_access_key
```

## Scripts

| Command        | Description                         |
| -------------- | ----------------------------------- |
| `vp dev`       | Start dev server                    |
| `vp build`     | Type-check and build for production |
| `vp preview`   | Preview production build            |
| `vp fmt .`     | Format code                         |

## Routes

| Path          | Description                                         |
| ------------- | --------------------------------------------------- |
| `/`           | Home — paginated masonry gallery with search        |
| `/images/:id` | Image detail — full image, photographer info, stats |
