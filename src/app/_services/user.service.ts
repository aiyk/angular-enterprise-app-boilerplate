import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../_helpers/globals';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${myGlobals.config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${myGlobals.config.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${myGlobals.config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${myGlobals.config.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${myGlobals.config.apiUrl}/users/${id}`);
    }
}
