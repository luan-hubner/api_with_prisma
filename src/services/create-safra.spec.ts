import { InMemorySafrasRepository } from '../../test/repositories/InMemorySafrasRepository'
import { CreateSafra, CreateSafraRequest } from './create-safra'

interface SutTypes {
  sut: CreateSafra
}

const makeSut = (): SutTypes => {
  const inMemorySafrasRepository = new InMemorySafrasRepository()
  const sut = new CreateSafra(inMemorySafrasRepository)
  return {
    sut,
  }
}

const criarFakeSafra = (): CreateSafraRequest => ({
  DESCRICAO: '2021/2022',
  DATA_INICIO: '2021-09-12',
  DATA_FINALIZACAO: '2022-04-04',
  ABREVIACAO: 'SAFRA MILHO',
})

describe('Create Safra', () => {
  it('Deve chamar o método de criação da safra com os valores corretos', async () => {
    const { sut } = makeSut()
    const executeSpy = jest.spyOn(sut, 'execute')
    await sut.execute(criarFakeSafra())
    expect(executeSpy).toHaveBeenCalledWith(criarFakeSafra())
  })
})
