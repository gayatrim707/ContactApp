import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: Contact = {
    id:0,
    FirstName: '', LastName: '',
    Email: ''
  };
  contactslist: any =[];

  constructor(private contactService: ContactServiceService, private router: Router) {}
  ngOnInit() {

    this.contactService.getContacts().subscribe((data: any) => {
      console.log(data)  
      this.contactslist = data;
       
      });
    
  }
  
  selectedItemId: number = 0;
   goToCreate(id: number) {
    debugger;
    this.selectedItemId=id;
    //this.itemSelected.emit(id);
    this.router.navigate(['/contact']);
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id)
    .subscribe({
      next: (res) => {
        console.log('Contact deleted successfully:', res);
        // Reset the form or navigate to another page
      },
      error: (err) => {
        console.error('Error deleting Contact:', err);
      },
    });
  }
}
