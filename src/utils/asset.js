// Prepends the Vite base URL so assets work on both dev and GitHub Pages
const base = import.meta.env.BASE_URL
export const asset = (path) => `${base}${path.replace(/^\//, '')}`
