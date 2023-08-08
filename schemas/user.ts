export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url',
    },
    {
      // this is only if you use credentials provider
      name: 'password',
      type: 'string',
      hidden: true,
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
    },
    {
      name: 'likedPosts',
      title: 'Liked Posts',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'postId',
        },
      ],
    },
   {
    name:'connections'
    ,title:'Connections',
    type:'object',
    fields:[
      {
        name: 'connectedUsr',
        title: 'Connected Users',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'userId', type: 'string', title: 'userId'},
              {name: 'name', type: 'string', title: 'name'},
              {name: 'img', type: 'string', title: 'img'},
              {name: 'mail', type: 'string', title: 'email'},
            ],
          },
        ],
      },
      {
        name: 'requests',
        title: 'Requests',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'userId', type: 'string', title: 'userId'},
              {name: 'name', type: 'string', title: 'name'},
              {name: 'img', type: 'string', title: 'img'},
              {name: 'mail', type: 'string', title: 'email'},
            ],
          },
        ],
      },
    ]
   }
  ],
}
