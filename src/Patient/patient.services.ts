/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class PatientAccess{

    patientProfile():string{
        return "Patient Profile"
    }

    upcomingAppointment():string{
        return "List Of All Upcoming Appointment"
    }

    pastAppointments():string{
        return "List Of All Past Apoointments"
    }

    deleteAppointment():string{
        return "Appointment Deleted"
    }

    addAppointment():string{
        return "Appointment Booked"
    }

    updateAppointment():string{
        return "Appointment Details Update"
    }
}