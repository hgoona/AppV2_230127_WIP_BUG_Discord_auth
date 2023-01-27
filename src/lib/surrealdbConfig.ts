import { SurrealREST } from "surrealdb-rest-ts";
import {
  VITE_SURREAL_HOST,
  VITE_SURREAL_PORT,
  VITE_SURREAL_USER,
  VITE_SURREAL_PASS,
  VITE_SURREAL_NS,
  VITE_SURREAL_DB,
  VITE_SURREAL_PROTOCOL
} from "$env/static/private"

const host = VITE_SURREAL_HOST
const port = VITE_SURREAL_PORT
const user = VITE_SURREAL_USER
const pass = VITE_SURREAL_PASS
const ns = VITE_SURREAL_NS
const db = VITE_SURREAL_DB
const protocol = VITE_SURREAL_PROTOCOL

export const clientPromise = new Promise<SurrealREST>((resolve) => {
  resolve(
    new SurrealREST(`${protocol}://${host}:${port}`, {
      ns,
      db,
      user,
      password: pass,
    })
  );
});