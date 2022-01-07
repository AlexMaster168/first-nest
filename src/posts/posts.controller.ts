import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common"
import { CreatePostDto } from "./dto/create-post.dto"
import { PostsService } from "./posts.service"
import { FileInterceptor } from "@nestjs/platform-express"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

@ApiTags('Пости')
@Controller('posts')
export class PostsController {
   constructor(private postService: PostsService) {}

   @ApiOperation({summary: 'Создание поста'})
   @ApiResponse({status: 200})
   @Post()
   @UseInterceptors(FileInterceptor('image'))
   createPost(@Body() dto: CreatePostDto, @UploadedFile() image: number) {
      return this.postService.create(dto, image)
   }
}
