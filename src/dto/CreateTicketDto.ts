import { IsNumberString, IsNotEmpty } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsNumberString()
    price: string;

    @IsNotEmpty()
    userId: string;
}
