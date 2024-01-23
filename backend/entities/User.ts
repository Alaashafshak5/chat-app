import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./Message";

@Entity("user", { schema: "chat-app" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 50 })
  username: string;

  @Column("varchar", { name: "profile", nullable: true, length: 100 })
  profile: string | null;

  @Column("int", {
    name: "online",
    comment: "0: offline 1:online",
    default: () => "'0'",
  })
  online: number;

  @OneToMany(() => Message, (message) => message.receiver)
  messages: Message[];

  @OneToMany(() => Message, (message) => message.sender)
  messages2: Message[];
}
