import React from 'react'
import PropTypes from 'prop-types'
import { BlazePageTemplate } from '../../templates/blaze-page'

const BlazePageTemplate = ({ entry, widgetFor }) => (
  <BlazePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BlazePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlazePagePreview
