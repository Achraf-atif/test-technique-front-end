import { Server, Site } from './../models/serveur-site';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeurSiteService {

  private apiUrl = 'http://localhost:3000/serveurs'; 

  constructor(private http: HttpClient) {}

  // Fetches a list of servers from the server
  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.apiUrl);
  }

  // Adds a new server to the server
  addServer(data: Server): Observable<Server> {
    return this.http.post<Server>(this.apiUrl, data);
  }

  // Adds a new site to a specific server
  addSiteToServer(serverId: number, site: Site): Observable<Server> {
    const url = `${this.apiUrl}/${serverId}/add-site`;
    return this.http.post<Server>(url, site);
  }

  // Deletes a server by its ID
  deleteServer(serverId: number): Observable<void> {
    const url = `${this.apiUrl}/${serverId}`;
    return this.http.delete<void>(url);
  }

}
