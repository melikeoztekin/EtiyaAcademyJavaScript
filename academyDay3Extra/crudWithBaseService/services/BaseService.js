export default class BaseService {
  constructor(list) {
    this.list = list;
  }

  getAll() {
    console.log("Get All method works.");
    return this.list;
  }

  getById(id) {
    console.log("------------------------");
    console.log("Get By Id method works.");
    let isEntity = this.list.filter((entity) => entity.id === id);
    return isEntity.length > 0 ? isEntity : "No entity found";
  }

  add(entity) {
    console.log("------------------------");
    console.log("Add method works.");
    let createId = this.list.length + 1;
    entity.id = createId;
    return this.list.push(entity);
  }

  deleteById(id) {
    console.log("------------------------");
    console.log("Delete By Id method works.");
    let entityIndex = this.list.findIndex((entity) => entity.id === id);
    return this.list.splice(entityIndex, 1);
  }

  update(entity) {
    console.log("------------------------");
    console.log("Update method works.");
    this.list[this.list.findIndex((x) => x.id === entity.id)] = entity;
  }
}
