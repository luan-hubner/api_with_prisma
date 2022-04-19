import { SafrasRepository } from '../repositories/safras-repository'

export interface CreateSafraRequest {
  DESCRICAO: string
  DATA_INICIO: string
  DATA_FINALIZACAO: string
  ABREVIACAO: string
}

export class CreateSafra {
  constructor(private readonly safrasRepository: SafrasRepository) {}

  async execute(data: CreateSafraRequest): Promise<void> {
    await this.safrasRepository.create(data)
  }
}
