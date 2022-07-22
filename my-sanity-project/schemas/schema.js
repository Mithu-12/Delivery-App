// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import restaurant from './restaurant'
import dish from './dish'
import category from './category'
import featured from './featured'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    restaurant,
    dish,
    category,
    featured,

  ]),
})
