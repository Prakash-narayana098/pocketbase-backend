/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3457641303")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3950752670",
    "hidden": false,
    "id": "relation2365320962",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "subCategoryId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3457641303")

  // remove field
  collection.fields.removeById("relation2365320962")

  return app.save(collection)
})
