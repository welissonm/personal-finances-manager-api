import { PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseEntity from './base-entity.interface';

export class BaseEntityImpl implements BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('uuid')
    uuid: string;

    @Column('time without time zone', { default: 'CURRENT_TIMESTAMP' })
    readonly createdAt: Date;

    @Column('time without time zone')
    readonly updatedAt?: Date;

    @Column('boolean', { default: true })
    enabled: boolean;

    constructor(id: number, createdAt:Date, updatedAt?: Date) {
      this.id = id;
      this.uuid = '';
      this.enabled = true;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
}