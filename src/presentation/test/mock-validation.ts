import { Validation } from '@/presentation/protocols/validation'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): null|Error {
      return null
    }
  }
  return new ValidationStub()
}
