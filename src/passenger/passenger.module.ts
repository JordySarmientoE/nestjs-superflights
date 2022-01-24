import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASSENGER } from '../common/models/models';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSENGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  exports: [PassengerService],
})
export class PassengerModule {}
