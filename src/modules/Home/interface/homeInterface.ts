import { ReactNode } from 'react'
export interface stepTitleProps {
  title: string,
  number: string
}
export interface stepTwoCardProps {
  title: string,
  desc: string,
  content: string,
}
export interface stepThreeCardProps {
  icon: string,
  background: string,
  indexText: string,
  children?: ReactNode,
  height?: string, 
}
export interface stepFourCardProps {
  img: string,
  desc: string,
}
