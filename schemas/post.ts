export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'meadiaFile',
      title: 'MeadiaFile',
      type: 'file',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'userId',
              title: '_id',
              type: 'string',
            },
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
          ],
        },
      ],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    },
  ],
}
