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
          type: 'userMinData',
        },
      ],
    },
    {
      name: 'requests_sent',
      title: 'Requests sent',
      type: 'array',

      of: [
        {
          type: 'userMinData'
        },
      ],
    },
    {
      name: 'connected',
      title: 'Connected Users',
      type: 'array',
      of: [
        {
          type: 'userMinData'
        },
      ],
    },
  ],
}

