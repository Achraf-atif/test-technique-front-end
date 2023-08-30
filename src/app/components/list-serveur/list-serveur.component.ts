import { Server, Site } from './../../models/serveur-site'; 
import { ServeurSiteService } from './../../services/serveur-site.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-serveur',
  templateUrl: './list-serveur.component.html',
  styleUrls: ['./list-serveur.component.css']
})
export class ListServeurComponent implements OnInit {
  servers: Server[] = []; // Initialize an array to store the servers
  selectedServer: Server | null = null; // Initialize a selectedServer variable to hold the currently selected server
  showSitesSection: boolean = true; // Flag to control the visibility of the sites section

  search: string = ''; // Initialize a search string for filtering

  p: number = 1; // Current page number for pagination
  itemsPerPage: number = 5; // Number of items to display per page
  itemsPerPage2: number = 8; // Another option for the number of items per page

  onPageChange(pageNumber: number) {
    this.p = pageNumber; // Update the current page number
  }

  onItemsPerPageChange() {
    this.p = 1; // Reset the current page number when items per page change
  }

  constructor(private serverService: ServeurSiteService) {}

  toggleSiteStatus(site: Site) {
    site.active = !site.active; // Toggle the active status of a site
  }

  deleteSiteFrontEnd(siteId: number) {
    if (this.selectedServer) {
      // Remove the site with the specified ID from the selected server's sites array
      this.selectedServer.sites = this.selectedServer.sites.filter(site => site.id !== siteId);
    }
  }

  deleteServerFrontEnd(serverId: number) {
    const confirmation = window.confirm('Are you sure you want to delete this server?'); // Show a confirmation dialog

    if (confirmation) {
      // Call the service to delete the server and subscribe to the response
      this.serverService.deleteServer(serverId).subscribe(
        () => {
          // Remove the deleted server from the 'servers' array and reset 'selectedServer'
          this.servers = this.servers.filter(server => server.id !== serverId);
          this.selectedServer = null;
        },
        error => {
          console.error('Error deleting server:', error); // Log an error if server deletion fails
        }
      );
    }
  }

  ngOnInit(): void {
    // Fetch the list of servers and populate the 'servers' array
    this.serverService.getServers().subscribe(
      (servers: Server[]) => {
        this.servers = servers;
      }
    );
  }

  isDropdownOpen = false;

  toggleDropdown(serveur: Server) {
    this.selectedServer = serveur; // Set the selected server for dropdown options
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle the dropdown's open state
  }

  toggleSitesSection() {
    this.showSitesSection = !this.showSitesSection; // Toggle the visibility of the sites section
  }
}
