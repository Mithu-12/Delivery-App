export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(280),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish of GBP',
    },
  ],
};
