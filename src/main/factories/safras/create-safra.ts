import { CreateSafraController } from '../../../presentation/controllers/safras/create-safra-controller'
import { FieldsValidation } from '../../../presentation/helpers/fields-validation'
import { Controller } from '../../../presentation/protocols/controller'
import { PrismaSafrasRepository } from '../../../repositories/prisma/prisma-safras-repository'
import { CreateSafra } from '../../../services/create-safra'

export const makeCreateSafraController = (): Controller => {
  const prismaSafrasRepository = new PrismaSafrasRepository()
  const fieldsValidation = new FieldsValidation()
  const createSafra = new CreateSafra(prismaSafrasRepository)
  return new CreateSafraController(createSafra, fieldsValidation)
}
