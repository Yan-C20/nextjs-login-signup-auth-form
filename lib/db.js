import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://DMCollarga:XOOiJkPOZwECBLo3@cluster0.tebzgjt.mongodb.net/auth-demo'
  );

  return client;
}
