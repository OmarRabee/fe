import { AbstractControl } from "@angular/forms";

export function customMailValidator(control: AbstractControl): { [key: string]: string } | null {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(control.value).toLowerCase())) {
      return { 'error': '• Invalid email format !' };
  }
  return null;
}
