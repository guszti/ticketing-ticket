import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus, HttpCode } from "@nestjs/common";
import { CreateTicketDto } from "src/dto/CreateTicketDto";
import { UpdateTicketDto } from "src/dto/UpdateTicketDto";
import { TicketRepository } from "src/repository/TicketRepository";

@Controller("api/ticket")
export class TicketController {
    constructor(private ticketRepository: TicketRepository) { }

    @Post()
    async createTicket(@Body() createTicketDto: CreateTicketDto) {
        return await this.ticketRepository.create(createTicketDto);
    }

    @Get(":id")
    async getTicket(@Param("id") id: string) {
        return await this.ticketRepository.findOne(id);
    }

    @Put(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async updateTicket(
        @Param("id") id: string,
        @Body() updateTicketDto: UpdateTicketDto
    ) {
        await this.ticketRepository.update(id, updateTicketDto);
    }

    @Get()
    async getAllTickets() {
        return await this.ticketRepository.findAll();
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteTicket(@Param("id") id: string) {
        await this.ticketRepository.delete(id);
    }
}
