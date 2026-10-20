


@Controller()
export class AppController {
  constructor(  appService) {;this.appService = appService;}

  Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('health')
  healthCheck() {
    // The middleware in main.ts will automatically 
    // attach the CSRF cookies to this response.
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
