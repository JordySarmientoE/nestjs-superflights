import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGT } from '../common/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerModule } from '../passenger/passenger.module';

@Module({
  controllers: [FlightController],
  providers: [FlightService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGT.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PassengerModule,
  ],
})
export class FlightModule {}
