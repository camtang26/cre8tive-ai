import type { Ref, MutableRefObject } from 'react'

export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(value)
      } else {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    })
  }
}
