import type { UserResponseDto } from '../dtos/user.dtos';

const toUserResponseDto = (user: { _id: unknown; email: string }): UserResponseDto => {
  return {
    id: String(user._id),
    email: user.email,
  };
};

export default toUserResponseDto;
