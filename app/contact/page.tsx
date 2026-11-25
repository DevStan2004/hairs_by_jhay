import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactDetails from '../components/contact/ContactDetails'
import Map from '../components/contact/Map'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <ContactHero />
        <ContactDetails />
        <Map />
    </>
  )
}

export default page