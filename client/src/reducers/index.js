import { combineReducers } from "redux";
import pannes from "./pannes";
import vehicules from "./vehicules";
import clients from "./clients";
import reparateurs from "./reparateurs";
import questions from "./questions";
import typepannes from "./typepannes";
import reponses from "./reponses";
import enquetes from "./enquetes";






export default combineReducers({
  pannes, vehicules, clients, reparateurs, questions, typepannes, reponses, enquetes
});
