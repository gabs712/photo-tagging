export type TargetName =
  | 'skeleton'
  | 'painter'
  | 'apple_dragon'
  | 'flame'
  | 'yellow_bird'

export interface TargetLocation {
  name: TargetName
  minX: number
  maxX: number
  minY: number
  maxY: number
  founded: boolean
}
