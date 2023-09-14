export default {
  name: 'chat',
  title: 'Chat',
  type: 'document',
  fields: [
    {
      name: 'userOne',
      title: 'userOne',
      type: 'user_ref'
    },
    {
      name: 'userTwo',
      title: 'userTwo',
      type: 'user_ref'
    },
    {
      name: 'chat_messages',
      title: 'chat_messages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'sender', title: 'sender', type: 'user_ref'},
            {name: 'receiver', title: 'receiver', type: 'user_ref'},
            {name: 'message', title: 'message', type: 'string'},
            {
              name: 'date_time',
              title: 'Date_Time',
              type: 'datetime',
              options: {
                dateFormat: 'YYYY-MM-DD',
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
