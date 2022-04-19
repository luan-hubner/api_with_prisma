import { Safra } from '../../src/entities/Safra'
import {
  CreateSafraData,
  SafrasRepository,
} from '../../src/repositories/safras-repository'
import crypto from 'node:crypto'

export class InMemorySafrasRepository implements SafrasRepository {
  public items: Safra[] = []

  async create(data: CreateSafraData): Promise<void> {
    this.items.push({
      ID: crypto.randomUUID(),
      ABREVIACAO: data.ABREVIACAO,
      DESCRICAO: data.DESCRICAO,
      DATA_FINALIZACAO: data.DATA_FINALIZACAO,
      DATA_INICIO: data.DATA_INICIO,
      STATUS: 0,
    })
  }
}
