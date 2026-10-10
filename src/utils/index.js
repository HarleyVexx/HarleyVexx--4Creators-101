export function createPageUrl(pageName) {
  if (pageName === 'Home') return '/'
  return '/' + pageName.toLowerCase()
}
