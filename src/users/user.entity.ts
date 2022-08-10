import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  UserName: string;

  @Column()
  @MinLength(1)
  @IsString()
  PassWord: string;

  @Column()
  @MinLength(1)
  @IsBoolean()
  Role: boolean;
}