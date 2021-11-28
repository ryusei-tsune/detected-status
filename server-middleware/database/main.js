import knex from "knex"
import knexfile from "../../knexfile"
const env = process.env.DB_ENV || "development" 
const knexInstance = knex(knexfile[env])
export default knexInstance