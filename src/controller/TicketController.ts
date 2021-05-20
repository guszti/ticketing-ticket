import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { CreateTicketDto } from "src/dto/CreateTicketDto";
import { UpdateTicketDto } from "src/dto/UpdateTicketDto";

@Controller("api/ticket")
export class TicketController {
    @Post()
    createTicket(@Body() createTicketDto: CreateTicketDto) {

    }

    @Get(":id")
    getTicket(@Param("id") id: string) {

    }

    @Put(":id")
    updateTicket(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {

    }

    @Get()
    getAllTickets() {

    }

    @Delete(":id")
    deleteTicket(@Param("id") id: string) {

    }
}
