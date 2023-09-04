export default {
  name: 'asset',
  type: 'document',
  title: 'Asset',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'email',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'userId',
    },
    {
      name: 'assets',
      type: 'array',
      title: 'Assets',
      of: [{type: 'file'}],
    },
  ],
}
