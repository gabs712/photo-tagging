interface TipPictureProps {
  src: string
  founded?: boolean
}

function TipPicture({ src, founded = false }: TipPictureProps) {
  return (
    <div>
      <img
        src={src}
        alt=""
        className={`${founded ? '' : 'grayscale'} size-8 rounded-full border-1 border-sky-300 bg-white transition-colors`}
      />
    </div>
  )
}

export default function Header() {
  return (
    <div className="sticky top-0 z-40 h-12 w-full bg-sky-700 px-2 py-2">
      <div className="flex items-center justify-center gap-3.5">
        <TipPicture src="assets/hints/painter.png" />
        <TipPicture src="assets/hints/apple_dragon.png" />
        <TipPicture src="assets/hints/skeleton.png" />
        <TipPicture src="assets/hints/flame.png" />
        <TipPicture src="assets/hints/yellow_bird.png" />
      </div>
    </div>
  )
}
