import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
   const userFondedByEmail = this.usersRepository.findByEmail(email);

    if(userFondedByEmail){
      throw new Error("User already exists!");
    }
    const createdUser = this.usersRepository.create({email,name});

    delete createdUser.updated_at;
    delete createdUser.created_at;
    delete createdUser.id;
    
    return createdUser;


  }
}

export { CreateUserUseCase };
