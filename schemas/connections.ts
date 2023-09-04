export default {
  name: 'connections',
  title: 'Connections',
  type: 'document',
  fields: [
    {
      name:  'userId',
      title:'ID',
      type:'string'
    },
    {
        name:  'email',
        title:'Email',
        type:'string'
      },
    {
      name: 'requests_got',
      title: 'Requests got',
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
      name: 'requests_sent',
      title: 'Requests sent',
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
      name: 'connected',
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
  ],
}

