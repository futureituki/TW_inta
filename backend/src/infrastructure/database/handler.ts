import { MongoClient, Db, Collection, Document } from "mongodb"

const url = "mongodb://127.0.0.1:27017"
const dbName = "template"
const auth = { username: "root", password: "pass" }

export abstract class IDBHandler {
  abstract client: MongoClient
  abstract db: Db
  abstract collection(collationName: string): Collection
}

export class DBHandler implements IDBHandler {
  private _client: MongoClient | null = null
  private _db: Db | null = null
  constructor(_client: MongoClient | null, _db: Db | null) {
    this._client = _client
    this._db = _db
  }

  static init = async () => {
    const _client = new MongoClient(url, {
      // auth,
    })
    await _client.connect()
    const _db = _client.db(dbName)
    return new DBHandler(_client, _db)
  }
  get client() {
    if (!this._client) throw new Error()
    return this._client
  }
  get db() {
    if (!this?._db) throw new Error()
    return this._db
  }
  collection(collationName: string): Collection<Document> {
    if (!this?._db) throw new Error()
    return this._db.collection(collationName)
  }
}
