import { Module } from '@nestjs/common';
import { MathController } from './math/math.controller'; // Import MathController

@Module({
  imports: [],
  controllers: [MathController], // Add MathController to the controllers array
  providers: [],
})
export class AppModule {}
