import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    'providedIn': 'root'
})
export class PremiumService {

    constructor(private http: HttpClient) {

    }

    getOccupationList() {
        return this.http.get('http://localhost:62146/api/premium/GetOccupationList')
    }

    postvalues(values) {
        return this.http.post('http://localhost:62146/api/Premium', values);
    }

}