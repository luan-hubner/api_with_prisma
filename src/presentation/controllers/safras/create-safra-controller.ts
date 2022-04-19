import { badRequest, created, serverError } from '../../helpers/http-helper'
import { CreateSafra } from '../../../services/create-safra'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { FieldsValidation } from '../../helpers/fields-validation'

export class CreateSafraController implements Controller {
  constructor(
    private readonly createSafra: CreateSafra,
    private readonly fieldsValidation: FieldsValidation
  ) {}

  createSafraRequiredFields = [
    'DESCRICAO',
    'DATA_INICIO',
    'DATA_FINALIZACAO',
    'ABREVIACAO',
  ]

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const error = this.fieldsValidation.validate(
      request.body,
      this.createSafraRequiredFields
    )

    if (error) {
      return badRequest(new MissingParamError(error))
    }

    const { DESCRICAO, DATA_INICIO, DATA_FINALIZACAO, ABREVIACAO } =
      request.body

    try {
      await this.createSafra.execute({
        DESCRICAO,
        DATA_INICIO,
        DATA_FINALIZACAO,
        ABREVIACAO,
      })

      return created({})
    } catch (err: any) {
      return serverError(err)
    }
  }
}
