import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  uploadFile(file) {
    return { file };
  }
}
