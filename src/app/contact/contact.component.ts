import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.subject && this.contact.message) {
      console.log('Form Submitted', this.contact);
      alert('Message sent successfully!');
      this.resetForm();
    }
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}