import { TargetName } from '../types/Target'

interface TipPictureProps {
  src: string
  founded?: boolean
}

function TipPicture({ src, founded }: TipPictureProps) {
  return (
    <div>
      <img
        src={src}
        alt=""
        className={`${founded ? 'border-2' : 'grayscale border-1'} size-8 rounded-full border-sky-300 bg-white transition-colors`}
      />
    </div>
  )
}

interface HeaderProps {
  findings: TargetName[]
}

export default function Header({ findings }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 h-12 w-full bg-sky-700 px-2 py-2">
      <div className="flex items-center justify-center gap-3.5">
        <TipPicture
          src="assets/hints/painter.png"
          founded={findings.includes('painter')}
        />
        <TipPicture
          src="assets/hints/apple_dragon.png"
          founded={findings.includes('apple_dragon')}
        />
        <TipPicture
          src="assets/hints/skeleton.png"
          founded={findings.includes('skeleton')}
        />
        <TipPicture
          src="assets/hints/flame.png"
          founded={findings.includes('flame')}
        />
        <TipPicture
          src="assets/hints/yellow_bird.png"
          founded={findings.includes('yellow_bird')}
        />
      </div>
    </div>
  )
}
