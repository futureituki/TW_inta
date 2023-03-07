<<<<<<< HEAD
import React from 'react';

type MovieBoxProps = {
  videoSrc: string;
}

export const MovieBox: React.FC<MovieBoxProps> = ({ videoSrc }) => {
  return (
    <div>
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
=======
import { FC, ReactNode } from "react"

//size
type Props = {
  children:ReactNode
  className?:string
}
export const MovieBox:FC<Props> = ({className, children}) => {
  return (
    <div className={[`border-stone-200`,className].join(' ')}>
      {children}
    </div>
  )
>>>>>>> d2b76d88324c18a5526f692ee51fe0528b15d34c
}