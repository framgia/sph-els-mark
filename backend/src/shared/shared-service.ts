import { Repository } from 'typeorm';

export abstract class SharedService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async save(options) {
    return this.repository.save(options);
  }

  async findOne(options) {
    return this.repository.findOne(options);
  }

  async find(options) {
    return this.repository.find(options);
  }

  async update(id: number, options) {
    return this.repository.update(id, options);
  }

  async create(options) {
    return this.repository.create(options);
  }
}
