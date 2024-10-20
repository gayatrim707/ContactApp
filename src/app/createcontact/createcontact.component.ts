import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contact, ContactServiceService } from '../contact-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './createcontact.component.html',
  styleUrl: './createcontact.component.css',
})
export class CreateContactComponent implements OnInit, OnChanges{
  myForm !: FormGroup;
  @Input() contactId!: number;
  constructor(private activatedRoute: ActivatedRoute,private contactService: ContactServiceService, private router: Router,private fb: FormBuilder) {
  }
  contacts: Contact = { id: 0, FirstName: '', Email: '', LastName: '' };
  contactDetail:any;
  ngOnInit(){
    this.myForm = this.fb.group({
      Id:0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnChanges(changes: SimpleChanges) {
      this.contacts.id= this.contactId;
      if(this.contactId > 0)
      {
          this.getContactById();
      }
  }
  getContactById(){
    this.contactService.getContactsById(this.contacts).subscribe((data: any) => {
      console.log(data)  
      this.contactDetail = data;
      this.myForm.patchValue(data);
      });
  }
  updateContact(){
    if (this.myForm.valid) {
      this.contacts=this.myForm.value;
        this.contactService.UpdateContact(this.contactId,this.contacts).subscribe((res)=>{
          this.myForm.reset();
          this.contactId=0;
          window.location.reload();
       }) 
      }
      else {
        console.log('Form is invalid');
      }
     } 

  createContact() {
    if (this.myForm.valid) {
      this.contacts=this.myForm.value;
      this.contactService.createContact(this.contacts).subscribe({
      next: (res) => {
        console.log('Contact created successfully:', res);
        this.myForm.reset();
        this.contactId=0;
        window.location.reload();
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
    this.myForm.reset();
  }
}
