import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../shared/services/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css',
})
export class BookAppointmentComponent {
  constructor(
    private fb: FormBuilder,
    private AppointmentService: AppointmentService
  ) {}
  modal: boolean = false;
  bookForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    carType: ['', Validators.required],
    carModel: ['', Validators.required],
    service: ['', Validators.required],
    branch: ['', Validators.required],
    notes: ['', Validators.required],
  });

  sendForm() {
    this.AppointmentService.bookAppointment(this.bookForm.value).subscribe({
      next: (res) => {
        if (res.msg === 'success') {
          this.bookForm.reset();
          this.modal = true;
        }
      },
    });
  }
  closeModal() {
    const modalElement = document.getElementById('appointmentModal');
    if (modalElement) {
      modalElement.classList.add('hide');
      setTimeout(() => {
        this.modal = false;
        modalElement.classList.remove('hide');
      }, 300);
    }
  }
}
