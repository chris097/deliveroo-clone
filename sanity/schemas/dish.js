import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short of Description",
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: "price",
      type: "string",
      title: "Price of dish in GBP",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image of the Dish",
    }),
    // defineField({
    //   name: 'name',
    //   title: 'Name',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
})
