import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationException extends HttpException {
   messages;

   // @ts-ignore
   constructor(response) {
      super(response, HttpStatus.BAD_REQUEST);
      this.messages = response
   }
}