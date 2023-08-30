import { ServeurSiteService } from 'src/app/services/serveur-site.service'; // Import the 'ServeurSiteService' from the specified path
import { Site, Server } from './../../models/serveur-site'; // Import the 'Site' and 'Server' models from the specified path
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {

  siteForm: FormGroup; // Declare a FormGroup to handle the site form
  servers: Server[] = []; // Initialize an array to store the servers

  constructor(
    private formBuilder: FormBuilder, // FormBuilder service to create and manage forms
    private serveurSiteService: ServeurSiteService, // Service to interact with the server/site-related functionality
    private router: Router, // Router service for navigation
  ) {
    // Initialize the siteForm with form controls and validators
    this.siteForm = this.formBuilder.group({
      serverId: ['', Validators.required], // Form control for the selected server ID
      name: ['', Validators.required], // Form control for the site name
      domainName: ['', Validators.required], // Form control for the site domain name
      ipAddress: ['', Validators.required], // Form control for the site IP address
      active: [true] // Form control for the site active status (default: true)
    });
  }

  onSubmit() {
    if (this.siteForm.valid) { // Check if the form is valid
      const serverId = this.siteForm.value.serverId; // Get the selected serverId from the form
      const newSite: Site = {
        id: undefined, // Use undefined instead of null
        name: this.siteForm.value.name, // Get the name from the form value
        domainName: this.siteForm.value.domainName, // Get the domain name from the form value
        ipAddress: this.siteForm.value.ipAddress, // Get the IP address from the form value
        active: this.siteForm.value.active // Get the active status from the form value
      };

      // Call the service to add the new site to the selected server and subscribe to the response
      this.serveurSiteService.addSiteToServer(serverId, newSite).subscribe(
        response => {
          console.log("Site added:", response); // Log the response when the site is successfully added
        },
        error => {
          console.error("Error adding site:", error); // Log an error if site addition fails
        }
      );
    }
  }

  ngOnInit(): void {
    // Fetch the list of servers and populate the 'servers' array
    this.serveurSiteService.getServers().subscribe(
      (servers: Server[]) => {
        this.servers = servers;
      }
    );
  }

  navigateAndReset() {
    this.router.navigate(['/']); // Navigate to the desired route
    this.siteForm.reset(); // Reset the form fields
  }
}
