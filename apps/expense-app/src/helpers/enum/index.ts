export function exists(e: Object, value: string | number | symbol) {
  return Object.values(e).some( e => e == value)
}