import { useEffect } from 'react'

/**
 * Adds a class name to the `<html>` tag.
 * @param className the class name to add
 */

export function useRootClass(className: string) {
  useEffect(() => {
    const { classList } = document.documentElement

    classList.add(className)
    return () => {
      classList.remove(className)
    }
  }, [className])
}
