/* eslint-disable prettier/prettier */
import { Controller, Delete, Post, Put, Get } from '@nestjs/common';
import { PatientAccess } from '../services/patient.services';



@Controller('patient')
export class PatientController {

    constructor(private patientAccess : PatientAccess) {}

    //get patient profile
    @Get('/patientProfile')
    patientProfile():string{
       return this.patientAccess.patientProfile();
    }

    //get upcoming patient Appointment
    @Get('/upcomingAppointment')
    upcomingAppointment():string{
       return this.patientAccess.upcomingAppointment();
    }
    
    //get past appointment
    @Get('/pastAppointments')
    pastAppointments():string{
       return this.patientAccess.pastAppointments();
    }

    //delete appointment
    @Delete('/deleteAppointment')
    deleteAppointment():string{
      return this.patientAccess.deleteAppointment();
    }
    //addAppointment
    @Post('/addAppointment')
    addAppointment(): string{
        return this.patientAccess.addAppointment();
    }    

    //updateAppointment
    @Put('/updateAppointment')
    updateAppointment():string{
       return this.patientAccess.updateAppointment();
    }
}
