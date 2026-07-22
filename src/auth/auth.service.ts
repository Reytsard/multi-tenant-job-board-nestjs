import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/signUp.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.userService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, user: user.username };

    //generates JWT
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    if (await this.userService.isEmailExists(signUpDto.email)) {
      throw new HttpException(
        'Email already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    //TODO in the future: create email verification
    const user = await this.userService.createUser(signUpDto);

    //Todo: return ResponseDTO
    return user;
  }
}
