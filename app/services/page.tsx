import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesList from '../components/services/ServicesList'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <ServicesHero />
        <ServicesList />
    </>
  )
}

export default page