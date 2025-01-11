import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginView from './LoginView';

export function Login(): JSX.Element {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Geçerli bir e-posta giriniz')
      .required('E-posta gerekli'),
    password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalı')
      .matches(/[A-Z]/, 'Şifre en az bir büyük harf içermelidir')
      .matches(/[0-9]/, 'Şifre en az bir sayı içermelidir')
      .required('Şifre gerekli'),
  });

  const {
    control,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = async () => {
    const emailValid = await trigger('email');
    const passwordValid = await trigger('password');

    if (emailValid && passwordValid) {
      const { email, password } = getValues();
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      console.log('Validasyon hatası var!');
    }
  };

  return (
    <div>
      <LoginView
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        trigger={trigger}
      />
    </div>
  );
}
