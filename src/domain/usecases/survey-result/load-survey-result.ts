import { SurveyResultModel } from '../../models/survey-result'

export type SaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface LoadSurveyResult {
  load: (surveyId: string) => Promise<SurveyResultModel>
}
