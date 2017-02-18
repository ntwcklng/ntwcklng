import Page from '../layouts/page'
import Heading from '../components/heading'

import React from 'react'
export default class Error extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    return (
      <Page>
        {this.props.statusCode === 404
          ?
          <div>
            <Heading>404</Heading>
            <p>Page could not be found.</p>
          </div>
          :
          <div>
            <Heading>Server Error</Heading>
            <p>{this.props.statusCode}</p>
          </div>
        }

      </Page>
    )
  }
}