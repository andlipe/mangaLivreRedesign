import React from 'react'
import { Header } from '../../../components'
import { LayoutProps } from './type'
import routes from '../../routes'
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header routes={routes} />
      <main>{children}</main>
    </>
  )
}
