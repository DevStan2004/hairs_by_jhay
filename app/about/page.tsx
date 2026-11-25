import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutJourney from '../components/about/AboutJourney'
import MeetStylists from '../components/about/MeetStylist'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <AboutHero />
        <AboutJourney />
        <MeetStylists />
    </>
  )
}

export default page