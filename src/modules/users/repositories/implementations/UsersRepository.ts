import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User;

    Object.assign(user,{
      name,
      email,
      created_at: new Date(),
      updated_at:new Date()
    })
     this.users.push(user);
  
    return user;

  }

  findById(id: string): User | undefined {
   const userFoundById = this.users.find((user) =>  user.id === id);

   if(userFoundById){
      return userFoundById;
   }
   return null;
  }

  findByEmail(email: string): User | undefined {
    const userFoundByEmail = this.users.find((user) =>  user.email === email);
    
    if(userFoundByEmail){
       return userFoundByEmail;
    }
    return null;
  }

  turnAdmin(receivedUser: User): User {
   const userFoundById = this.users.find((user)=> user.id === receivedUser.id);
   if(userFoundById) {
    userFoundById.admin = true;
    userFoundById.updated_at = new Date();

    return userFoundById;
   }
   return null;

  }



  list(): User[] {
   return this.users;
  }
}

export { UsersRepository };
