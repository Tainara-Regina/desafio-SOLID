import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

    const userFoundById = this.usersRepository.findById(user_id);

if(userFoundById) {
  this.usersRepository.turnAdmin(userFoundById);
  return userFoundById;
}
    
throw new Error("should not be able to turn a non existing user as admin");
   

  }
}

export { TurnUserAdminUseCase };
