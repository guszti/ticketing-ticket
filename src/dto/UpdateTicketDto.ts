import { IsOptional, IsNumberString } from "class-validator";

export class UpdateTicketDto {
    @IsOptional()
    title: string;

    @IsOptional()
    @IsNumberString()
    price: string;
}
