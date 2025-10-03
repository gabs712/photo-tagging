import Coordinate from '../types/Coordinate'

export default function getClickCoordinate(
  imgEl: HTMLImageElement,
  e: React.MouseEvent<HTMLImageElement>,
): Coordinate {
  const rect = imgEl.getBoundingClientRect()

  const x = e.clientX - rect.x
  const y = e.clientY - rect.y

  const xPercent = (x / rect.width) * 100
  const yPercent = (y / rect.height) * 100

  return { x: xPercent, y: yPercent }
}
