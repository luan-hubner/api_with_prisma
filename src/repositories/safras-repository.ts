export interface CreateSafraData {
  DESCRICAO: string
  DATA_INICIO: string
  DATA_FINALIZACAO: string
  ABREVIACAO: string
}

export interface SafrasRepository {
  create(data: CreateSafraData): Promise<void>
}
