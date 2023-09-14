export default {
  name: 'connections',
  title: 'Connections',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'user_ref',
    },
    {
      name: 'requests_got',
      title: 'Requests got',
      type: 'array',

      of: [
        {name:"user",
        title:"User",
        type: 'object',
        fields: [{name:"user",type:"user_ref"}],
        },
      ],
    },
    {
      name: 'requests_sent',
      title: 'Requests sent',
      type: 'array',

      of: [
        {name:"user",
        title:"User",
        type: 'object',
        fields: [{name:"user",type:"user_ref"}],
        },
      ],
    },
    {
      name: 'connected',
      title: 'Connected Users',
      type: 'array',
      of: [
        {name:"user",
        title:"User",
        type: 'object',
        fields: [{name:"user",type:"user_ref"}],
        },
      ],
    },
  ],
}

