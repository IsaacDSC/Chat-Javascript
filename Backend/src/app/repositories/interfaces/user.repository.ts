

export interface IMethodsUser {
  create(user): Promise<any>
  findAll(): Promise<any>
  findByUsername(username: string): Promise<any>
}