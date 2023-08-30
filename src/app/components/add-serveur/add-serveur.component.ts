import { ServeurSiteService } from 'src/app/services/serveur-site.service'; // Import the 'ServeurSiteService' from the specified path
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-serveur',
  templateUrl: './add-serveur.component.html',
  styleUrls: ['./add-serveur.component.css']
})
export class AddServeurComponent {

  serverForm: FormGroup; // Declare a FormGroup to handle the server form

  constructor(
    private formBuilder: FormBuilder, // FormBuilder service to create and manage forms
    private serveurService: ServeurSiteService, // Service to interact with the server-related functionality
    private router: Router, // Router service for navigation
  ) {
    // Initialize the serverForm with form controls and validators
    this.serverForm = this.formBuilder.group({
      name: ['', Validators.required], // Form control for the server name
      ipAddress: ['', Validators.required] // Form control for the server IP address
    });
  }

  onSubmit() {
    if (this.serverForm.valid) { // Check if the form is valid
      const newServer = {
        name: this.serverForm.value.name, // Get the name from the form value
        ipAddress: this.serverForm.value.ipAddress, // Get the IP address from the form value
        sites: [] // Initialize sites as an empty array (not used in this code snippet)
      };

      // Call the service to add the new server and subscribe to the response
      this.serveurService.addServer(newServer).subscribe(
        response => {
          console.log('Server added:', response); // Log the response when the server is successfully added
          this.serverForm.reset(); // Reset the form fields
          this.navigateAndReset(); // Navigate back and reset the form
        },
        error => {
          console.error('Error adding server:', error); // Log an error if server addition fails
        }
      );
    }
  }

  navigateAndReset() {
    this.router.navigate(['/']); // Navigate to the root route (replace with the actual route as needed)
    this.serverForm.reset(); // Reset the form fields
  }

}
