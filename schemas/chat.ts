export default {
  name: 'chat',
  title: 'Chat',
  type: 'document',
  fields: [
    {
      name: 'userOne',
      title: 'userOne',
      type: 'object',
      fields: [
        {
          name: 'userId',
          title: 'userId',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    },
    {
      name: 'userTwo',
      title: 'userTwo',
      type: 'object',
      fields: [
        {
          name: 'userId',
          title: 'userId',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    },
    {
      name: 'chat_messages',
      title: 'chat_messages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'sender_id', title: 'sender_id', type: 'string'},
            {name: 'receiver_id', title: 'receiver_id', type: 'string'},
            {name: 'message', title: 'message', type: 'string'},
            {
              name: 'date_time',
              title: 'Date_Time',
              type: 'datetime',
              options: {
                dateFormat: 'YYYY-MM-DD HH:mm',
                timeFormat: 'HH:mm',
              },
              initialValue: () => new Date().toISOString(),
            },
          ],
        },
      ],
    },
  ],
}
