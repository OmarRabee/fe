import { AbstractControl } from "@angular/forms";

export function phoneValidator(control: AbstractControl): { [key: string]: string } | null {
  var re =  /^01\d{9}$/;

  if (!re.test(String(control.value).toLowerCase())) {
      return { 'error': '• Invalid phone number !' };
  }
  return null;
}
