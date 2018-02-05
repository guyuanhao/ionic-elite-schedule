import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EliteApi{

    private baseUrl = 'https://elite-schedule-app-373e2.firebaseio.com/'
    constructor(private http : HttpClient){

    }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'tournaments.json')
                .subscribe(res => resolve(res));
        })
    }
}