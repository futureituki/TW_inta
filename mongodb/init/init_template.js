db = db.getSiblingDB("template")
db.createUser({
  user: "root",
  pwd: "pass",
  roles: [{ role: "root", db: "admin" }],
})
db.createCollection("test")
