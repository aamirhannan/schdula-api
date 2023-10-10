/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminAccess{

    // findAllDoctors():string{
    //     return "List Of All Doctors"
    // }

    findAllDoctors(): any {
        const doctors = [
            // Your list of doctors here
        ];
        return { data: doctors, message: "List Of All Doctors" };
    }

    findAllPatients():string{
        return "List Of All Patients"
    }

    findAllAppointments():string{
        return "List Of All Apoointments"
    }

    deleteAppointment():string{
        return "Appointment Deleeted"
    }

    addDoctor():string{
        return "Docotr Added"
    }

    updateDoctor():string{
        return "Doctor Details Update"
    }
}