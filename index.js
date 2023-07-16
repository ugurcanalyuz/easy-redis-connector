const { createClient } = require('async-redis')

class EasyRedisConnector {
    constructor (options) {
        this.redis = createClient(options)
    }

    get = async (key) => {
        return await this.redis.get(key)
    }

    set = async (key, value) => {
        if (typeof(value) !== 'string') {
            value = JSON.stringify(value)
        }
        return await this.redis.set(key, value)
    }

    update = async (key, value) => {
        if (typeof(value) !== 'string') {
            value = JSON.stringify(value)
        }
        return await this.redis.set(key, value)
    }

    remove = async (key, value) => {
        return await this.redis.del(key)
    }
}

module.exports = EasyRedisConnector