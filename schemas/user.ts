export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url'
    },
    {
      // this is only if you use credentials provider
      name: 'password',
      type: 'string',
      hidden: true
    },
    {
      name: 'emailVerified',
      type: 'datetime',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    }
  ],
}
