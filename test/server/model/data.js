// In-memory storage
module.exports = {
    users: [
        {
            id:             'user1.id',
            username:       'user1.username',
            password:       'user1.password'
        },
        {
            id:             'user2.id',
            username:       'user2.username',
            password:       'user2.password',
            authorized_clients: [
              'client1.id',
              'client2.id',
              'client3.id'
            ],
        }
    ],
    clients: [
        {
            id:             'client1.id',
            name:           'client1.name',
            secret:         'client1.secret',
            redirectUri:    'http://example.org/oauth2'
        },
        {
            id:             'client2.id',
            name:           'client2.name',
            secret:         'client2.Secret',
            redirectUri:    'http://example.org/oauth2'
        },
        {
            id:             'client3.id',
            name:           'client3.name',
            secret:         'client3.Secret',
            redirectUri:    'http://example.org/oauth3'
        }
    ],
    codes: [],
    accessTokens: [],
    refreshTokens: []
};
