/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PatientController } from 'src/Patient/patient.controller';
import { PatientAccess } from 'src/Patient/patient.services';
@Module({
  imports: [],
  controllers: [PatientController],
  providers: [PatientAccess],
})
export class PatientModule {
  constructor(){
    console.log('PatientModule')
  }
}
