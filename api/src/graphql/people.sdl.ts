export const schema = gql`
  type Person {
    name: String!
  }

  type Query {
    people: [Person!]! @skipAuth
  }
`
