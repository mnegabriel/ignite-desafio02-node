import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    console.log(user_id);
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User doesn't exist");
    }

    return userExists;
  }
}

export { ShowUserProfileUseCase };
