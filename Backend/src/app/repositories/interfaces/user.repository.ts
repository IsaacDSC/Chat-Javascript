

export interface IMethodsUser {
  create(user): Promise<any>
  findAll(): Promise<any>
}