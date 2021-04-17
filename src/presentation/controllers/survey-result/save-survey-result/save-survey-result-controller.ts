import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadSurveyById,
  ok
} from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return ok(survey)
  }
}
