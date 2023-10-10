/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin.module';
import { DoctorModule } from './modules/doctor.module';
import { PatientModule } from './modules/patient.module';
@Module({
  imports: [AdminModule, DoctorModule, PatientModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('RootModule')
  }
}
