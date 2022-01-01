/**
 * @jest-environment jsdom
 */

import React from 'react'
import * as redux from 'react-redux'

import { render } from '@testing-library/react'
import Home from './index.page'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@shared/themes/defaultTheme'
import { store } from '../../app/store'

const data = [
  {
    id: 7247,
    chapter: '856',
    image: '/Aphoteosis.png',
    background: '1E142F',
    time: '2022-01-01T13:41:18-03:00',
    selected: false,
  },
]

describe('Home', () => {
  it('renders a My page', () => {
    render(
      <redux.Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home highLightedMangas={data} />
        </ThemeProvider>
      </redux.Provider>
    )

    // const heading = screen.query('heading', { name: /My page/i })
    // expect(heading).toBeInTheDocument()
  })
})
