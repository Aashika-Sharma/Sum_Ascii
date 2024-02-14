// src/math/math.controller.ts
import { Controller, Get, Param } from '@nestjs/common';

@Controller('math')
export class MathController {
  @Get('sum/:n')
  getSum(@Param('n') n: number): { result: number } {
    const sum = (n * (n + 1)) / 2;
    return { result: sum };
  }

  @Get('ascii/:char')
  getAscii(@Param('char') char: string): { result: number } {
    const asciiValue = char.charCodeAt(0);
    return { result: asciiValue };
  }
}
