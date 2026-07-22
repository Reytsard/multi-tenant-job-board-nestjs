import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async signin(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(signUpDto);
  }
}
