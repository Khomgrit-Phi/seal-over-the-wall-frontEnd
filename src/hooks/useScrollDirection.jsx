import { useEffect, useState } from "react"

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("down")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}
