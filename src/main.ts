import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from "./pipes/validation.pipe"

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
     .setTitle('Advanced-Backend with technology Node, Nest, Postgresql, Docker and Swagger')
     .setDescription('Documentation application')
     .setVersion('1.0')
     .addTag('Alex Master')
     .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs',app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start();
