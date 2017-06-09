db.getCollection('Account').find({ pending_balance: { $in: [200, 500] } })

db.getCollection('Account').find({ $or: [{ pending_balance: { $eq: 200 } }, { pending_balance: { $eq: 500 } }] })

db.getCollection('Customer').find({}).sort({ postal_code: -1 })

db.getCollection('Customer').find({}).sort({ postal_code: 1 })


db.getCollection('Employee').update({ last_name: 'Tyler' }, { $set: { first_name: 'FFFF' } })

