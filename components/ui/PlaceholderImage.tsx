/**
 * PlaceholderImage — dev-only helper that renders a styled placeholder
 * when the actual image file is missing. Replace usage with next/image in production.
 */

interface Props {
  width?: number
  height?: number
  label?: string
  className?: string
}

export default function PlaceholderImage({ width = 800, height = 600, label = 'Image', className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-sand/20 text-mink text-xs font-mono ${className}`}
      style={{ width, height, maxWidth: '100%' }}
      role="img"
      aria-label={label}
    >
      {label} · {width}×{height}
    </div>
  )
}
