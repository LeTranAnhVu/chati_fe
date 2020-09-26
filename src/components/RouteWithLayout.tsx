import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

type Props = {
  layout?: FC
  component: FC
  path: string
  exact?: boolean
}
const RouteWithLayout: FC<Props> = (props) => {
  const { layout: Layout = MainLayout, component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout {...matchProps}>
          <Component />
        </Layout>
      )}
    />
  )
}

export default RouteWithLayout
