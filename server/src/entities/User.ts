import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from "typeorm";
import Profile from "./Profile";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column({ name: "hashed_password" })
    hashedPassword!: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

}
