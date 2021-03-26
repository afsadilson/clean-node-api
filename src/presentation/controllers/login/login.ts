import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    let response
    if (!httpRequest.body.email) {
      response = badRequest(new MissingParamError('email'))
    }
    if (!httpRequest.body.password) {
      response = badRequest(new MissingParamError('password'))
    }
    return await new Promise(resolve => resolve(response))
  }
}
