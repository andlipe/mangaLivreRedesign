/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@shared/themes/defaultTheme'
import Header from '.'

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

describe('Header', () => {
  it('renders Logo', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header routes={routes} />
      </ThemeProvider>
    )

    const logo = screen.getByRole('img', { name: /MangaLivre Logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders Navbar', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header routes={routes} />
      </ThemeProvider>
    )

    const logo = screen.getByRole('navigation')
    expect(logo).toBeInTheDocument()
  })

  it('renders Navbar items', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header routes={routes} />
      </ThemeProvider>
    )

    const navbarItemHome = screen.getByText('Home')
    const navbarItemAbout = screen.getByText('About')

    expect(navbarItemHome).toBeInTheDocument()
    expect(navbarItemAbout).toBeInTheDocument()
  })
})
