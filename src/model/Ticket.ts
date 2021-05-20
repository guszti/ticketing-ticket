import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TicketDocument = Ticket & Document

@Schema()
export class Ticket {
    @Prop()
    title: string;

    @Prop()
    price: string;

    @Prop()
    userId: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
