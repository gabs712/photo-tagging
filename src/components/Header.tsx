import { TargetName } from '../types/Target'
import painter from '../assets/hints/painter.png'
import appleDragon from '../assets/hints/apple_dragon.png'
import skeleton from '../assets/hints/skeleton.png'
import flame from '../assets/hints/flame.png'
import yellow_bird from '../assets/hints/yellow_bird.png'

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
        <TipPicture src={painter} founded={findings.includes('painter')} />
        <TipPicture
          src={appleDragon}
          founded={findings.includes('apple_dragon')}
        />
        <TipPicture src={skeleton} founded={findings.includes('skeleton')} />
        <TipPicture src={flame} founded={findings.includes('flame')} />
        <TipPicture
          src={yellow_bird}
          founded={findings.includes('yellow_bird')}
        />
      </div>
    </div>
  )
}
