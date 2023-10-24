import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
