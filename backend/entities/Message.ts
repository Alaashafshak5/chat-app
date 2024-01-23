import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("receiver_id", ["receiverId"], {})
@Index("sender_id", ["senderId"], {})
@Entity("message", { schema: "chat-app" })
export class Message {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "text" })
  text: string;

  @Column("int", { name: "sender_id" })
  senderId: number;

  @Column("int", { name: "receiver_id" })
  receiverId: number;

  @Column("timestamp", { name: "time", default: () => "CURRENT_TIMESTAMP" })
  time: Date;

  @ManyToOne(() => User, (user) => user.messages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "receiver_id", referencedColumnName: "id" }])
  receiver: User;

  @ManyToOne(() => User, (user) => user.messages2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "sender_id", referencedColumnName: "id" }])
  sender: User;
}
