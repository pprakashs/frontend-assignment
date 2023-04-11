type H1Props = {
  title: string
  className?: string
}

export const H1 = ({ title, className }: H1Props) => {
  return <h1 className={`sm:text-xl text-base font-bold mb-2 ${className ? className : ""}`}>{title}</h1>
}
