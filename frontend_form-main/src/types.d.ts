declare module "*.module.css"
type AppConfig = {
    baseUrl: string
}

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
type User = 'logged-in' | 'logged-out'
interface counter {
    userStatus: User,
    name:string,
    email:string,
    password:string  
  }