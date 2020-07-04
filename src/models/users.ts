import { Column } from 'typeorm';
import { BaseEntityImpl } from './base-entity';

export default class User extends BaseEntityImpl {
  @Column('varchar', { length: 150, unique: false, nullable: false })
  name: string;

  @Column('varchar', { length: 150, unique: true, nullable: false })
  email: string;

  constructor() {
    super(0, new Date(), undefined);
    this.name = '';
    this.email = '';
  }
}
