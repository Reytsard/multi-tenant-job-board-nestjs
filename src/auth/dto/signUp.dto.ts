import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class SignUpDto extends PickType(CreateUserDto, [
  'firstName',
  'lastName',
  'birthdate',
  'middleName',
  'email',
  'password',
  'username',
]) {
  validatedPassword: string;
}
