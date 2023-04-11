import { ChangeEvent } from "react"

export type InputProps = {
  className?: string
  placeholder?: string
  type: string
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type TextAreaProps = {
  className?: string
  placeholder?: string
  name: string
  rows?: number
  cols?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type LabelProps = {
  title: string
}
