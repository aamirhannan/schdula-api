/* eslint-disable prettier/prettier */
import { Controller, Delete, Post, Put, Get, Res } from '@nestjs/common';
import { AdminAccess } from '../services/admin.services';



@Controller('admin')
export class AdminController {

    constructor(private adminAccess : AdminAccess) {}

    //get all doctor
   //  @Get('/findAllDoctors')
   //  findAllDoctors():string{
   //     return this.adminAccess.findAllDoctors();
   //  }

     @Get("/findAllDoctors")
    async findAllDoctors(@Res() res): Promise<void> {
        const doctorsData = this.adminAccess.findAllDoctors();

        // Return the JSON response with a 200 status code
        res.status(200).json(doctorsData);
    }

    //get all patient
    @Get('/findAllPatients')
    findAllPatients():string{
       return this.adminAccess.findAllPatients();
    }
    
    //get all appointment
    @Get('/findAllAppointments')
    findAllAppointments():string{
       return this.adminAccess.findAllAppointments();
    }

    //delete appointment
    @Delete('/deleteAppointment')
    deleteAppointment():string{
      return this.adminAccess.deleteAppointment();
    }
    //addDoctor
    @Post('/addDoctor')
    addDoctor(): string{
        return this.adminAccess.addDoctor();
    }    

    //updateDoctor
    @Put('/updateDoctor')
    updateDoctor():string{
       return this.adminAccess.updateDoctor();
    }
}
