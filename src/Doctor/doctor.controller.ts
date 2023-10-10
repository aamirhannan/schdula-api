/* eslint-disable prettier/prettier */
import { Controller, Delete, Get } from '@nestjs/common';
import { DoctorAccess } from './doctor.services';



@Controller('doctor')
export class DoctorController {

    constructor(private doctorAccess : DoctorAccess) {}

    //get all patient
    @Get('/findAllPatients')
    findAllPatients():string{
       return this.doctorAccess.findAllPatients();
    }
    
    //get all appointment
    @Get('/findAllAppointments')
    findAllAppointments():string{
       return this.doctorAccess.findAllAppointments();
    }

    //delete appointment
    @Delete('/deleteAppointment')
    deleteAppointment():string{
      return this.doctorAccess.deleteAppointment();
    }
}
