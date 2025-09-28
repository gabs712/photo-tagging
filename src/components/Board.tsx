import React, { useRef, useState } from 'react'

interface Coordinates {
  x: number
  y: number
}

function getClickCoordinates(
  imgEl: HTMLImageElement,
  e: React.MouseEvent<HTMLImageElement>,
): Coordinates {
  const rect = imgEl.getBoundingClientRect()

  const x = e.clientX - rect.x
  const y = e.clientY - rect.y

  const xPercent = (x / rect.width) * 100
  const yPercent = (y / rect.height) * 100

  return { x: xPercent, y: yPercent }
}

export default function Board() {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [selection, setSelection] = useState<Coordinates | null>(null)

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    const imgEl = imgRef.current
    if (!imgEl) return

    const coordinates = getClickCoordinates(imgEl, e)

    setSelection(coordinates)
  }

  return (
    <div className="flex justify-center bg-stone-200">
      <div className="relative overflow-hidden">
        <img
          className="cursor-crosshair shadow"
          ref={imgRef}
          onClick={handleClick}
          src="assets/dragon-charmers-island.webp"
          alt=""
        />
        {selection && (
          <div
            className="pointer-events-none absolute size-[40px] -translate-1/2 rounded-full bg-red-500/20 outline-2 outline-red-500"
            style={{
              top: `${selection.y}%`,
              left: `${selection.x}%`,
            }}
          ></div>
        )}
      </div>
    </div>
  )
}
