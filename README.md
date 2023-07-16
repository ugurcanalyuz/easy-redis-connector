# EasyRedisConnector

EasyRedisConnector is a Node.js library that provides a convenient way to connect to Redis and perform common operations like getting, setting, updating, and removing keys.

## Installation

```bash
npm install easy-redis-connector
```

## Usage
```
const EasyRedisConnector = require('easy-redis-connector');

// Create an instance of EasyRedisConnector
const options = {
  // Redis connection options
}
const redisConnector = new EasyRedisConnector(options)

// Get
await redisConnector.get('myKey')

// Set
await redisConnector.set('myKey', { name: 'Easy Redis Connector' })

// Update
await redisConnector.update('myKey', { name: 'Easy Redis Connector 2' })

// Delete
await redisConnector.destroy('myKey')
```

Good Works.