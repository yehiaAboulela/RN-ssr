import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { ConfirmationService } from '../../shared/services/confirmation.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
  standalone: false,
})
export class ConfirmationComponent implements AfterViewInit {
  constructor(
    private FormBuilder: FormBuilder,
    private ConfirmationService: ConfirmationService,
    private el: ElementRef,
    private router: Router,
    private toaster: ToastrService
  ) {}

  phoneInputInstance: any;
  ownedByTab: boolean = false;
  ownedBy: any = {};
  activation: any = {};
  base64Image: string | ArrayBuffer | null = null;
  myFile: any = '';
  loading: boolean = false;

  validationErrorMessages: { [key: number]: string } = {
    0: '', // No error
    1: 'Invalid phone number',
    2: 'Too short phone number',
    3: 'too long phone number',
    4: 'Invalid phone number',
    5: 'Invalid phone number',
  };
  warrantyForm: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.minLength(7)]],
    brand: ['', [Validators.required]],
    model: ['', [Validators.required, Validators.minLength(4)]],
    color: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    serialNumber: ['Royal-Nano'],
    image: ['', [Validators.required]],
  });

  ngAfterViewInit(): void {
    this.costumizePhoneInput();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.myFile = file;
  }

  costumizePhoneInput(): void {
    const phoneInput = this.el.nativeElement.querySelector('#phone');
    if (phoneInput) {
      this.phoneInputInstance = intlTelInput.default(phoneInput, {
        initialCountry: 'us',
        loadUtilsOnInit:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js',
      });
    }
  }

  getPhoneValidationMessage(): string {
    if (this.phoneInputInstance) {
      const errorCode = this.phoneInputInstance.getValidationError();
      return this.validationErrorMessages[errorCode];
    }
    return '';
  }

  activateWarranty(): void {
    this.loading = true;
    const validationMessage = this.getPhoneValidationMessage();

    if (this.warrantyForm.valid && !validationMessage) {
      const formData = new FormData();

      Object.keys(this.warrantyForm.controls).forEach((control) => {
        formData.append(control, this.warrantyForm.controls[control].value);
      });
      if (this.myFile) {
        formData.append('image', this.myFile, this.myFile.name);
      }

      this.ConfirmationService.warrantyActivation(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.msg == 'activated') {
            this.ownedByTab = true;
            this.ownedBy = res.owner;
          } else if (res.msg == 'not found') {
            this.toaster.warning('Serial Not Found', 'Sorry');
          } else if (res.msg == 'success') {
            this.activation = res.activation;
            this.router.navigate(['/thank-you']);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.warrantyForm.markAllAsTouched();
      this.loading = false;
    }
  }
}
