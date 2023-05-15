/* eslint-disable */

import React, { Component } from 'react'
import { satisfies } from 'semver'

// ❔ Javascript - dynamically typed language
// ❔ Typescript - statically and strictly typed extension of Javascript

// ❔ dynamically typed - Variables can hold values of any type without any type specification. Type is checked at runtime (browser).
// let myAge = 10
// // @ts-ignore
// myAge = '99'
// // @ts-ignore
// myAge.toFixed(1) // no error in vscode

// ❔ statically typed - Variables have a fixed type set at the time of declaration. Type is checked at compile-time (vscode).
// let myAge: number

// ❔ strictly typed - No automatic conversions or coercions between types are allowed. Explicit casting is required to change a variable's type.
// let myAge = 10
// myAge = "99" // error in vscode

// 👉 Inference
// let myAge = 10
// myAge = 1
// myAge = 'Arnas'

// 👉 Methods
// let myName = "John Doe"
// console.log(myName.toLowerCase())

// console.log(myName.toLocaleUpperCase())
// console.log(myName.toFixed(2))

// 👉 Type annotation / declaration
// let firstName: string
// const lastName = 'Doe'
// firstName = 'John Doe'
// firstName = 4

// 👉 Any types
// let lastName: any
// let firstName
// firstName = 4
// firstName = 'John Doe'
// firstName.toFixed(2)
// const age: number = firstName

// 👉 Functions
// const repeatText = (text, count) => {
//   for (let index = 0; index < count; index++) {
//     console.log(text)
//   }

//   return null
// }

// repeatText(5, 'some text')

// 👉 Parameter type annotations
// const repeatText = (text: string, count: number) => {
//   for (let index = 0; index < count; index++) {
//     console.log(text)
//   }

//   return null
// }

// repeatText('hi', 5)
// repeatText('hi', '5')

// 👉 Optional parameters
// function greeting(name?: string) {
//   console.log(`Hello, ${name || 'no name'}!`)
// }

// greeting('Random Name')
// greeting(10)
// greeting()
// greeting(undefined)

// 👉 Default parameters
// function greeting(name = 'no name') {
//   console.log(`Hello, ${name}!`)
// }

// greeting('Random Name')
// greeting()

// 👉 Inferring return types
// function greeting(name: string) {
//   return `Hello, ${name}!`
// }

// const greetingName = greeting('Karolis')
// const isName: boolean = greeting('Karolis')

// 👉 Explicit Return Types
// function greeting(name: string): undefined {
//   return undefined
// }

// const greeting = (name: string): undefined => {
//   return undefined
// }

// 👉 Void Return Type
// function greeting(name = 'no name') {
//   console.log(`Hello, ${name}!`)

//   return undefined
// }

// type Props = {
//   onClick: () => number
// }

// 👉 Array Type Annotations
// let names: string[] = ['First Name', 'Second Name']
// let names: Array<string> = ['First Name', 'Second Name']

// const names: Array<string> = ['1', '2', 3]

// let values: Array<boolean> = [true, false]
// values.push(false)
// values.push('false')

// 👉 Array Type Inference
// const array = [true, false, 'first name']
// const firstName = array[2]

// 📖 Tuple https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// const array: [boolean, boolean, string] = [true, false, 'first name']
// const firstName = array[2]

// 📖 as const https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
// const array = [true, false, 'first name'] as const
// const firstName = array[2]

// 👉 Empty array
// const array: Array<string | undefined | null | boolean> = []
// array.push('name')
// array.push(undefined)
// array.push(null)
// array.push(true)

// 👉 Custom types

// 👉 Object types
// let user: {
//   name: string
//   age: number
//   isGod?: boolean
// }

// user = {}
// user = { name: 'Karolis', age: 12, isGod: true }
// user = { name: 'Karolis', age: 12 }
// user = { name: 'Karolis', age: '2000' }

// let company: {
//   name: string
//   ceo: { name: string; age: number }
//   employees: Array<{ name: string; age: number }>
// }

// 👉 Type alias
// type StringType = string
// let myName: StringType
// myName = 'some name'
// myName = 4

// type User = {
//   name: string
//   age: number
// }

// let user: User
// user = { name: 'Karolis', age: 12 }

// type CompanyType = {
//   name: string
//   ceo: User
//   employees: Array<User>
// }

// 📖 Interface https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
// interface User {
//   name: string
//   age: number
// }

// 👉 Function types
// type SumType = (a: number, b: number) => number
// let add: SumType = (a, b) => {
//   return a + b
// }

// 👉 Generic functions
// function providedType<TGeneric>(value: TGeneric) {
//   return value
// }

// type SomeType = { very: string }
// const veryString = providedType<SomeType>({ very: 'nice' })
// const veryNumber = providedType<SomeType>({ very: 69 })
// const inferredItem = providedType<'bat'>('bat')

// function getFilledArray<T>(value: T, size: number): Array<T> {
//   return Array(size).fill(value)
// }

// const filled = getFilledArray({nice: ''}, 6)

// 👉 Generic types
// type GridItem<T> = {
//   position: number
//   data: T
// }

// const adItem: GridItem<string> = {
//   position: 1,
//   data: 'strfslk'
// }

// type User = { name: string }

// const userItem: GridItem<User> = {
//   position: 1,
//   data: { name: 'John' }
// }

// 👉 Unions
// let stringOrNo: number | string

// stringOrNo = 4
// stringOrNo = 'four'

// let arrayUnion: Array<number | string>
// arrayUnion = [4, 3, 2, 'some', 3, null]

// 👉 Type Narrowing
// function formatValue(value: string | number) {
//   // console.log(value.toLowerCase())

//   if (typeof value === 'string') {
//     console.log(value.toLowerCase())
//   }

//   console.log(value)

//   if (typeof value === 'number') {
//     console.log(value.toFixed(2))
//   }
// }

// 👉 Type narrowing from unknown
// function parseError(error: unknown) {
//   let errorMessage = ''

//   // errorMessage = error

//   if (typeof error === 'string') {
//     errorMessage = error
//   }

//   if (
//     typeof error === 'object' &&
//     error !== null &&
//     'message' in error &&
//     typeof error.message === 'string'
//   ) {
//     errorMessage = error.message
//   }

//   return errorMessage
// }

// 👉 Type casting
// let error: unknown
// let message: string
// message = error as string

// 👉 String Enums
// enum UiState {
//   Idle = 'idle',
//   Pending = 'pending',
//   Error = 'error'
// }

// const checkState = (newState: UiState.Error) => {
//   if (newState === UiState.Error) {
//     console.error('oops')
//   } else {
//     console.log('ok')
//   }
// }

// checkState(UiState.Error)
// checkState('')
// checkState('pending')

// 👉 Unions with Literal Types
// type Color = 'green' | 'yellow'

// function animalColor(color: Color) {
//   if (color === 'green') {
//     console.log('frog')
//   }

//   if (color === 'yellow') {
//     console.log('lion')
//   }

//   if (color === 'red') {
//     console.log('??')
//   }
// }

// animalColor('green')
// animalColor('red')

// 👉 Intersection
// type Address = { city: string; zip: number }
// type User = { name: string; company: string } & Address

// const user: User = {
//   name: 'name',
//   company: 'company',
//   city: 'city',
//   zip: 123,
// }

// 📖 Typescript utility types https://www.typescriptlang.org/docs/handbook/utility-types.html
// type User = { name: string; age?: number }
// type UnknownUser = Partial<User>

// 👉 Component props

type Props = {
  isEnabled: false
}

// const FunctionComponent = ({ isEnabled }: Props) => {
//   return <div>{isEnabled}</div>
// }

// class ClassComponent extends Component<Props> {
//   render() {
//     const { isEnabled } = this.props
//     return <div>{isEnabled}</div>
//   }
// }

// 👉 Dto and Model types

// type UserDto = {
//   real_name: string
// }

// type ApiResponse = {
//   users: Array<UserDto>
// }

// type UserModel = {
//   realName: string
// }

// type Props = {
//   users: Array<UserModel>
// }

// const transformUserDto = (user: UserDto): UserModel => {
//   return {
//     realName: user.real_name
//   }
// }

// 👉 typeof operator
// const OPTIONS = {
//   RED: { theme: 'error', color: '#ff0000' },
//   GREEN: { theme: 'success', color: '#00ff00' }
// }

// type Options = typeof OPTIONS

// 👉 keyof typeof
// const OPTIONS = {
//   RED: { theme: 'error', color: '#ff0000' },
//   GREEN: { theme: 'success', color: '#00ff00' }
// }

// type Options = typeof OPTIONS
// type OptionsKey = keyof Options

// const getColorFromName = (name: OptionsKey) => {
//   return OPTIONS[name].color
// }

// console.log(getColorFromName('RED'))

// 📖 Typescript handbook https://www.typescriptlang.org/docs/handbook/
// 📖 Matt Pocock https://www.youtube.com/@mattpocockuk/videos

// type Options = {
//   [Key: string]: {theme: string; color: string}
// }

// const OPTIONS  = {
//   RED: { theme: 'error', color: '#ff0000' },
//   GREEN: { theme: 'success', color: '#00ff00' }
// } satisfies Options

// console.log(OPTIONS.RED)
