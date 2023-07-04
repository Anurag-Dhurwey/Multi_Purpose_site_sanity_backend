export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'ProfileImg',
      type: 'image',
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
    },
    {
      name: 'status',
      title: 'Status',
      type: 'object',
      fields:[
        {name: 'vip', title: 'Vip', type: 'boolean'},
        {name: 'isVerified', title: 'IsVerified', type: 'boolean'},
      ]
      
    },
  ],
}
