import { HttpRequest, HttpResponse } from '../../presentation/protocols'
import { Controller } from './../../presentation/protocols/controller'

export class LogControllerDecorator implements Controller {
  private readonly controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)

    return await new Promise(resolve => resolve(httpResponse))
  }
}
