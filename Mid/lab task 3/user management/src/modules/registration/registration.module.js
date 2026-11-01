
import { RegistrationController } from "./registration.controller";
import { RegistrationService } from "./registration.service";

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
  exports: [RegistrationService],
})
export class RegistrationModule {}