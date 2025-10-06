import { useRef } from 'react'
import Coordinate from '../types/Coordinate'

interface BoardProps {
  onClick: (
    imgEl: HTMLImageElement | null,
    e: React.MouseEvent<HTMLImageElement>,
  ) => void
  selection: Coordinate | null
  marks: Coordinate[]
}

export default function Board({ onClick, selection, marks }: BoardProps) {
  const imgRef = useRef<HTMLImageElement | null>(null)

  return (
    <div className="flex justify-center bg-stone-200">
      <div className="relative overflow-hidden">
        <img
          className="cursor-crosshair shadow"
          ref={imgRef}
          onClick={(e) => onClick(imgRef.current, e)}
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
        {marks.map((mark, i) => (
          <div
            className="pointer-events-none absolute size-[40px] -translate-1/2 rounded-full bg-blue-500/20 outline-2 outline-blue-500"
            key={i}
            style={{
              top: `${mark.y}%`,
              left: `${mark.x}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
