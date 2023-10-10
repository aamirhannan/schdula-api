/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class DoctorAccess{
    
    findAllPatients():string{
        return "List Of All Patients"
    }

    findAllAppointments():string{
        return "List Of All Apoointments"
    }

    deleteAppointment():string{
        return "Appointment Deleeted"
    }
}