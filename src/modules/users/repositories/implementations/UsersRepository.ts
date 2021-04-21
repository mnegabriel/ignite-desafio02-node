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
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const selecteduser = this.users.find((user) => user.id === id);

    return selecteduser;
  }

  findByEmail(email: string): User | undefined {
    const selecteduser = this.users.find((user) => user.email === email);

    return selecteduser;
  }

  turnAdmin(receivedUser: User): User {
    const selectedIndex = this.users.findIndex(
      (user) => user.id === receivedUser.id
    );

    this.users[selectedIndex].admin = true;

    return this.users[selectedIndex];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
