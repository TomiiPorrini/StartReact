import { Conected } from "./Conected";

export class Contact{
    name = '';
    surname = '';
    email = '';
    conected = Conected.connected;

    constructor(name, surname, email, conected){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.conected = conected;
    }
}