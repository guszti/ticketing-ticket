import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ticket, TicketDocument } from "src/model/Ticket";
import { Model } from "mongoose";
import { CreateTicketDto } from "src/dto/CreateTicketDto";
import { UpdateTicketDto } from "src/dto/UpdateTicketDto";
import { DatabaseError, BadRequestError } from "@gticketing-common/common";

@Injectable()
export class TicketRepository {
    constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) { }

    async create(ticketDto: CreateTicketDto): Promise<TicketDocument> {
        try {
            const newTicket = new this.ticketModel(ticketDto);

            return newTicket.save();
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async findOne(id: string): Promise<TicketDocument> {
        try {
            return this.ticketModel.findOne({ _id: id });
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async update(id: string, ticketDto: UpdateTicketDto): Promise<void> {
        const ticket = await this.findOne(id);

        if (!ticket) {
            throw new BadRequestError("Ticket not found.");
        }

        for (const key of Object.keys(ticketDto)) {
            ticket[key] = ticketDto[key];
        }

        try {
            ticket.save();
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            this.ticketModel.findByIdAndDelete(id);
        } catch (e) {
            throw new BadRequestError("Ticket not found.");
        }
    }

    async findAll(): Promise<TicketDocument[]> {
        try {
            return this.ticketModel.find({});
        } catch (e) {
            throw new DatabaseError(e.message);
        }
    }
}
