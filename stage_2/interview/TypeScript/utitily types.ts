// 1. Pick <Type, Keys>
// The Pick utility type creates a new type by picking the set of properties Kets, which can be a string literal or unioon of string literals, from Type.
type User = {
    name: string
    age: number
    address: string
    occupation: string
}

type BasicUser = Pick<User, "name" | "age">

// type BasicUser = {
//   name: string;
//   age: number;
// }


// 2. Omit<TYpe, Keys>
// Opposite of pick.
type Usser = {
    name: string
    age: number
    address: string
    occupation: string
}

type BasiccUser = Omit<Usser, "address" | "occupation">

// type BasiccUser = {
//   name: string;
//   age: number;
// }



// 3. Partial <Type>
// The Partial utility type constructs a type with all properties of Type set to optional.
// It can be very useful when we are writing the update logic of an object.
type Users = {
    name: string
    age: number
    address: string
    occupation: string
}

type PartialUser = Partial<Users>

// type PartialUser = {
//   name?: string;
//   age?: number;
//   address?: string;
//   occupation?: string;
// }

// 4. Required <Type>
// The required utility type does the opposite of Partial
type PartialUsers = {
    name: string
    age: number
    address?: string
    occupation?: string
}

type Usery = Required<PartialUser>

// type Usery = {
//   name: string;
//   age: number;
//   address: string;
//   occupation: string;
// }


// 5. Readonly <Type> 
// The Readonly utility type construct a type with all properties of Type set to read only.
// Reassigning new values to its variable and properties will result in TypeScript warning.
type User3 = {
    name: string
    age: number
    address: string
    occupation: string
}

type ReadOnlyUser = Readonly<User3>

const user: ReadOnlyUser = {
    name: "Peter",
    age: 24,
    address: "Toronto",
    occupation: "software_engineer"
}

// user.name = "Tom"
// Cannot assign to 'name' because it is a read-only property.



// 6. Record <Keys, Type>
// The Record utility type constructs an object type with property keys from KEYS and value of type Type.
type User6 = {
    name: string
    age: number
    address: string
    occupation: string
}

type Team = Record<"player1" | "player2", User6>

// type Team = {
//   player1: User6;
//   player2: User6;
// }



// 7. ReturnType<Type>

// The ReturnType utility type constructs a type from the return type of a function type.
// It is useful when we are handling function types from external libraries and want to build custom types based on them.
/* import axios from 'axios'

type Response = ReturnType<typeof axios>

function callAPI(): Response {
    return axios("url")
} */
