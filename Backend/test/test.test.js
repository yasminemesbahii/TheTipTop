import { describe } from "@hapi/joi/lib/base"
import supertest from "supertest"
import route from '../apiRoute/apiRoute'

describe("Post /users",()=>{
    describe("given a username and passowrd",async ()=>{
        test("should rond with 200 status code",async ()=>{
           const res= await req(route).get("/users").send({
               nom:"nom",
               prenom:"prenom",
               genre:"genre",
               email:"email",
               password:"password"
            })
          expect(res.statutsCode).toBe(200)
        })
       
    })
    describe("when the userame and password is missing",async ()=>{
        await req(route).get("/").expect(200)
    })
})