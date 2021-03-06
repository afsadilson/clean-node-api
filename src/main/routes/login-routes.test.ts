import request from 'supertest'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL ?? '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup success', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Adilson',
          email: 'afs.adilson@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login success', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Adilson',
        email: 'afs.adilson@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'afs.adilson@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 on login not found', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'afs.adilson@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
