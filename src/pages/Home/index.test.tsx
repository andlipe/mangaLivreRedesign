/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders a My page', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: /My page/i })
    expect(heading).toBeInTheDocument()
  })
})
