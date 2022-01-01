/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import SliderToggles from '.'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@shared/themes/defaultTheme'

const data = [
  {
    id: 7247,
    chapter: '856',
    image: '/Aphoteosis.png',
    background: '1E142F',
    time: '2022-01-01T13:41:18-03:00',
    selected: false,
  },
  {
    id: 1764,
    chapter: '218',
    image: '/Akatsuki.png',
    background: '1B0924',
    time: '2021-12-31T12:06:22-03:00',
    selected: false,
  },
]

describe('SliderToggles', () => {
  it('renders Slider', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <SliderToggles
          options={data}
          changeSelected={(id: number) => console.log(id)}
        />
      </ThemeProvider>
    )

    const slider = screen.getAllByRole('button', {
      name: /Ellipse to change highlight manga/i,
    })
    expect(slider.length).toEqual(2)
  })
})
