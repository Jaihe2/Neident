interface ShinyTextProps {
  text: string
  className?: string
}

export default function ShinyText({ text, className = '' }: ShinyTextProps) {
  return (
    <span className={`shine-text ${className}`}>
      {text}
    </span>
  )
}
