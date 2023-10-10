/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminController } from 'src/controllers/admin.controller';
import { AdminAccess } from 'src/services/admin.services';
@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminAccess],
})
export class AdminModule {
  constructor(){
    console.log('AdminModule')
  }
}
