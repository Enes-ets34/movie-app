import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginView from './LoginView';
import { login, useAuth } from '@/context/auth/auth.context';
import { RoutesEnum, useHandleNavigate } from '@/utils/handleNavigate';

function Login(): JSX.Element {
  const { state, dispatch } = useAuth();
  const navigate = useHandleNavigate();

  useEffect(() => {
    if (state.user) {
      navigate(RoutesEnum.HOME);
    }
  }, [state.user, navigate]);

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
      login(dispatch, { id: email, password });
      navigate(RoutesEnum.HOME);
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
export default Login;
