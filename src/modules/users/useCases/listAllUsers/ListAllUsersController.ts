import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const  user_id = request.headers.user_id.toString();
    
    try {
      const listOfAllUser = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
        });
      return response.status(201).json(listOfAllUser);
    } catch(error) {
      return response.status(400).json({error})
    }
  }
}

export { ListAllUsersController };
