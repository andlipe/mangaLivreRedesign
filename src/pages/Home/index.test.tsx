/**
 * @jest-environment jsdom
 */

import React from 'react'
import * as redux from 'react-redux'

import { render } from '@testing-library/react'
import Home from './index.page'
import { ThemeProvider } from 'styled-components'
import themes from '../../app/styles/themes'
import { store } from '../../app/store'

describe('Home', () => {
  it('renders a My page', () => {
    render(
      <redux.Provider store={store}>
        <ThemeProvider theme={themes}>
          <Home />
        </ThemeProvider>
      </redux.Provider>
    )

    // const heading = screen.query('heading', { name: /My page/i })
    // expect(heading).toBeInTheDocument()
  })
})
