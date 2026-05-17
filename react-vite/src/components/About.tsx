import React, { type FC } from 'react'

interface IAboutProps {
  name: string
}

const About:FC<IAboutProps> = (props) => {

  props.name
  return (
    <div>About</div>
  )
}

export default About