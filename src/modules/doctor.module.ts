/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DoctorController } from 'src/controllers/doctor.controller';
import { DoctorAccess } from 'src/services/doctor.services';
@Module({
  imports: [],
  controllers: [DoctorController],
  providers: [DoctorAccess],
})
export class DoctorModule {
  constructor(){
    console.log('DoctorModule')
  }
}
