import { loginPath, signUpPath, surveyPath, surveyResultPath } from './paths'
import {
  accountSchema,
  loginParamsSchema,
  signUpParamsSchema,
  errorSchema,
  surveysSchema,
  surveySchema,
  surveyAnswerSchema,
  apiKeyAuthSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    saveSurveyParams: saveSurveyParamsSchema,
    surveyResult: surveyResultSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}
