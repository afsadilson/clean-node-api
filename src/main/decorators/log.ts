import { HttpRequest, HttpResponse } from '../../presentation/protocols'
import { Controller } from './../../presentation/protocols/controller'

export class LogControllerDecorator implements Controller {
  private readonly controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.controller.handle(httpRequest)
    const httpResponse = {
      statusCode: 200,
      body: {}
    }
    return await new Promise(resolve => resolve(httpResponse))
  }
}
