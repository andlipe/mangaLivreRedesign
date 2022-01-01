/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '..'
import { ThemeProvider } from 'styled-components'
import themes from '../../app/styles/themes'

describe('Button', () => {
  it('renders button', () => {
    render(
      <ThemeProvider theme={themes}>
        <Button label="teste" />{' '}
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /teste/i })
    expect(button).toBeInTheDocument()
  })
})
