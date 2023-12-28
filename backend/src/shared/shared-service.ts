import { Repository } from 'typeorm';

export abstract class SharedService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async save(options: any) {
    return this.repository.save(options);
  }

  async findOne(options: any) {
    return this.repository.findOne(options);
  }

  async find(options: any) {
    return this.repository.find(options);
  }

  async update(id: number, options: any) {
    return this.repository.update(id, options);
  }

  async create(options: any) {
    return this.repository.create(options);
  }

  async delete(options: any) {
    return this.repository.delete(options);
  }
}
