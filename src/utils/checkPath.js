export default (pathname, checkPathname = '') => {
  return pathname.replace(/^\/|\/$/g, '') === checkPathname
}
