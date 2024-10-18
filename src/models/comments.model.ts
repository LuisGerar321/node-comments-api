import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export default class Comments extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  body!: string;

  //children: relation to his parent
  @ForeignKey(() => Comments)
  @Column({
    type: DataType.INTEGER,
    allowNull: true, //null if is a main comment
    defaultValue: null,
  })
  parentCommentId!: number | null;
  @BelongsTo(() => Comments, {
    onDelete: "CASCADE", // Delete in CASCADE when parent destroyed
  })
  parentComment!: Comments;

  //parent: reletion to his children
  @HasMany(() => Comments, "parentCommentId")
  replies!: Comments[];
}
