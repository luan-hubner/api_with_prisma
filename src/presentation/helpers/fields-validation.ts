export class FieldsValidation {
  constructor() {}

  validate(fields: any, requiredFields: string[]) {
    for (const field of requiredFields) {
      if (!(field in fields)) {
        return field
      }
    }
  }
}
