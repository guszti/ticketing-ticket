import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { TicketController } from './controller/TicketController';
import { Ticket, TicketSchema } from './model/Ticket';
import { AuthMiddleware } from '@gticketing-common/common';
import { TicketRepository } from './repository/TicketRepository';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URL),
        MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }])
    ],
    controllers: [TicketController],
    providers: [TicketRepository],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes("/*");
    }
}
