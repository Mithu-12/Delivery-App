export default {
    name: 'featured',
    title: 'Featured Menu Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name of Featured',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        title: 'Short description',
        type: 'string',
        validation: (Rule) => Rule.max(280),
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{type: 'reference', to: [{type: 'restaurant'}]}]
      }
    ],
    
  }
  