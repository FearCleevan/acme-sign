import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Acme Sign & Graphics Co.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '(902) 481-1007',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'acmesign01@gmail.com',
    }),
    defineField({
      name: 'fax',
      title: 'Fax Number',
      type: 'string',
      initialValue: '(902) 481-0511',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({ name: 'street', title: 'Street', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'province', title: 'Province', type: 'string' }),
        defineField({ name: 'postalCode', title: 'Postal Code', type: 'string' }),
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Monday to Friday · 8:30 AM – 5:00 PM',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Site-wide Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'companyName' },
  },
})
