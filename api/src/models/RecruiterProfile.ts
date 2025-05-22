import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  DeletedAt,
  ForeignKey,
  HasMany,
  Index,
  Table, Unique,
} from 'sequelize-typescript';
import { User } from '@/models/User';
import { RecruiterProfileStatusEnum } from '@/modules/recruiterProfile/recruiterProfile.typedefs';
import { ProfileConnection } from '@/models/ProfileConnection';
import { ModelBase } from '@/models/ModelBase';

@Table({
  tableName: 'recruiter_profiles',
  paranoid: true,
})
export class RecruiterProfile extends ModelBase<RecruiterProfile> {
  @HasMany(() => ProfileConnection)
  profileConnections: ProfileConnection[];

  @Index('recruiter_profiles_user_id')
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    field: 'user_id',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User

  @Default(RecruiterProfileStatusEnum.Draft)
  @Column({
    type: DataType.ENUM(...Object.values(RecruiterProfileStatusEnum)),
  })
  status: RecruiterProfileStatusEnum;

  @Column({
    field: 'reject_reason',
  })
  rejectReason: string;

  @Column
  position: string;

  @Column({
    field: 'company_name',
  })
  companyName: string;

  @Column({
    type: DataType.STRING(255),
  })
  city: string;

  @Unique
  @Column
  slug: string

  @Column({
    field: 'statuses_notification_sent_at',
  })
  statusesNotificationSentAt: Date

  @DeletedAt
  @Column({
    field: 'deleted_at',
  })
  deletedAt: Date
}
