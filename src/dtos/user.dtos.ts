export interface CreateUserDto {
  email: string;
  passwordHash: string;
}

export interface RegisterUserDto {
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
