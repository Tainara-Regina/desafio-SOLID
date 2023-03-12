import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
  const userFondedById = this.usersRepository.findById(user_id); 

    if(userFondedById && userFondedById.admin === true) {
      const listAllUsers = this.usersRepository.list();
      return listAllUsers;
    }
    
    throw new Error("User not avaliable to acess");
  }
}

export { ListAllUsersUseCase };
