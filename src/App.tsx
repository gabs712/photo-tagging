import { useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'
import Coordinate from './types/Coordinate'
import getClickCoordinate from './utils/getClickCoordinate'
import targetLocations from './targetLocations'

export default function App() {
  const [selection, setSelection] = useState<Coordinate | null>(null)
  const [marks, setMarks] = useState<Coordinate[]>([])

  function handleClick(
    imgEl: HTMLImageElement | null,
    e: React.MouseEvent<HTMLImageElement>,
  ): void {
    if (!imgEl) return

    const coordinates = getClickCoordinate(imgEl, e)

    for (const target of targetLocations) {
      if (
        !target.founded &&
        coordinates.x >= target.minX &&
        coordinates.x <= target.maxX &&
        coordinates.y >= target.minY &&
        coordinates.y <= target.maxY
      ) {
        target.founded = true
        setSelection(null)
        setMarks([...marks, { x: coordinates.x, y: coordinates.y }])

        if (marks.length + 1 >= targetLocations.length) {
          alert('You won!')
        }

        return
      }
    }

    setSelection(coordinates)
  }

  return (
    <div className="relative min-h-svh bg-stone-100">
      <Header
        findings={targetLocations
          .filter((location) => location.founded)
          .map((target) => target.name)}
      />
      <Board onClick={handleClick} marks={marks} selection={selection} />
    </div>
  )
}
