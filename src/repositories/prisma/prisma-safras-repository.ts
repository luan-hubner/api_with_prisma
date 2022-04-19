import { prisma } from '../../prisma'
import { CreateSafraData, SafrasRepository } from '../safras-repository'

export class PrismaSafrasRepository implements SafrasRepository {
  async create(data: CreateSafraData): Promise<void> {
    await prisma.safra.create({
      data,
    })
  }
}
