import { Component, Input } from '@angular/core';
import { Contact, ContactServiceService } from '../contact-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './createcontact.component.html',
  styleUrl: './createcontact.component.css',
})
export class CreateContactComponent {
  myForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private contactService: ContactServiceService, private router: Router,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      Id:0,
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]]
    });
  }
  //contactId=localStorage.getItem('contactId'); 
  contacts: Contact = { id: 0, FirstName: '', Email: '', LastName: '' };
  contactDetail:any;
  @Input() contactId: number =0;
  //@Input() itemId!: number;
  ngOnInit(){
   
      // Example logic for fetching the item based on ID
      console.log(`Item ${this.contactId}`); // Simulate fetching item name
    
      this.contacts.id= this.contactId;
      console.log(this.contactId)
      if(this.contactId != 0)
      {
          //  this.getContactById();
      }
  }
  getContactById(){
    this.contactService.getContactsById(this.contacts).subscribe((res) => {
      console.log(res);
      this.contactDetail=res;
    });
   
  }
  updateContact(){
        this.contactService.UpdateContact(this.contacts).subscribe((res)=>{
         console.log(res);
       }) 
     } 

  createContact() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.contacts=this.myForm.value;
      console.log(this.contacts);
      this.contactService.createContact(this.contacts).subscribe({
      next: (res) => {
        console.log('Contact created successfully:', res);
        this.myForm.reset();
      },
      error: (err) => {
        console.error('Error creating Contact:', err);
      },
    });
  }
  else {
    console.log('Form is invalid');
  }
  }
  resetForm(): void {
    this.contacts = { id: 0, FirstName: '', Email: '', LastName: '' };
  }
}
