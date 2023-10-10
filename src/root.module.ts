/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DoctorModule } from './Doctor/doctor.module';
import { PatientModule } from './Patient/patient.module';
@Module({
  imports: [DoctorModule, PatientModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('RootModule')
  }
}
