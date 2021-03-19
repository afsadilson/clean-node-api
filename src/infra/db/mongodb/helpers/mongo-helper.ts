import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  getConnection (name: string): Collection {
    return this.client.db().collection(name)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
