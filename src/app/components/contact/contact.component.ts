import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSending = false;
  successMessage = '';
  errorMessage = '';

    sanitizeInput(input: string): string {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  async sendEmail(form: NgForm) {
    if (!form.valid) return;

    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      await emailjs.send(
        environment.emailServiceID,
        environment.emailTemplateID,
        {
          name: this.sanitizeInput(form.value.name),
          email: this.sanitizeInput(form.value.email),
          message: this.sanitizeInput(form.value.message),
          time: new Date().toLocaleString()
        },
        environment.emailPublicKey
      );

      this.successMessage = '✅ Message sent successfully!';
      form.resetForm();

      // ✅ Fade out success message after 4 seconds
      setTimeout(() => (this.successMessage = ''), 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      this.errorMessage = '❌ Failed to send message. Please try again later.';

      // ✅ Fade out error message after 4 seconds
      setTimeout(() => (this.errorMessage = ''), 4000);
    } finally {
      this.isSending = false;
    }
  }
}