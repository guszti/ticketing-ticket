import dotenv from "dotenv";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";
import { CustomValidationError } from "@gticketing-common/common";

async function bootstrap() {
    dotenv.config();

    const app = await NestFactory.create(AppModule);

    app.use(cookieParser)
    // TODO add custom exception filter

    app.useGlobalPipes(new ValidationPipe({
        exceptionFactory: (errors: ValidationError[]) => {
            throw new CustomValidationError("Validation failed", errors)
        }
    }));

    await app.listen(3000, () =>
        console.log("Ticket service is listening on port 4000.")
    );
}
bootstrap();
