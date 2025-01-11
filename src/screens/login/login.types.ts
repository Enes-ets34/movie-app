import { Control, FieldErrors, UseFormTrigger } from 'react-hook-form';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginProps {
  control: Control<LoginFormValues>; 
  errors: FieldErrors<LoginFormValues>;
  handleSubmit: () => void;
  trigger: UseFormTrigger<LoginFormValues>; // trigger fonksiyonu da ekleniyor
}
