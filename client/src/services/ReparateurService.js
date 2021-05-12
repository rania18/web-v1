import http from "../http-common";

const getAll = () => {
  return http.get("/reparateurs");
};

const get = id => {
  return http.get(`/reparateurs/${id}`);
};

const create = data => {
  return http.post("/reparateurs", data);
};

const update = (id, data) => {
  return http.put(`/reparateurs/${id}`, data);
};

const remove = id => {
  return http.delete(`/reparateurs/${id}`);
};

const removeAll = () => {
  return http.delete(`/reparateurs`);
};

const findByTitle = title => {
  return http.get(`/reparateurs?title=${title}`);
};

const ReparateurService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ReparateurService;
