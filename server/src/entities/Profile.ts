import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import User from "./user";

@Entity()
export default class Profile {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { name: "first_name", length: 20 })
    firstName!: string;

    @Column("varchar", { name: "last_name", length: 20 })
    lastName!: string;

    @Column("varchar", { length: 10 })
    gender!: string;

    @Column("varchar", { length: 20, default: "" })
    job: string;

    @Column("text", { default: "" })
    description: string;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

}
