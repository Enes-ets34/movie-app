import { useCallback, ChangeEvent } from 'react';
import { LoginProps } from './login.types';
import './login.scss';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { Colors } from '@/theme/colors';
import Text from '@/components/text/Text';
import { Controller } from 'react-hook-form';
import { Icons } from '@/theme/icons';

const LoginView = ({
  control,
  errors,
  handleSubmit,
  trigger,
}: LoginProps): JSX.Element => {
  const handleEmailChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      await trigger('email');
    },
    [trigger]
  );

  const handlePasswordChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      await trigger('password');
    },
    [trigger]
  );

  return (
    <div className='login-form'>
      <Text size='lg'>Giriş Yap</Text>
      <div style={{ width: '100%' }}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <>
              <Input
                isError={!!errors?.email?.message}
                {...field}
                type='text'
                label='E-posta'
                onChange={e => {
                  field.onChange(e);
                  handleEmailChange(e);
                }}
              />
              {errors.email && (
                <Text color={Colors.red600} size='xs'>
                  {errors.email.message}
                </Text>
              )}
            </>
          )}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <>
              <Input
                isError={!!errors?.password?.message}
                {...field}
                type='password'
                label='Şifre'
                onChange={e => {
                  field.onChange(e);
                  handlePasswordChange(e);
                }}
              />
              {errors.password && (
                <Text color={Colors.red600} size='xs'>
                  {errors.password.message}
                </Text>
              )}
            </>
          )}
        />
      </div>
      <Button
        disabled={!!(errors?.email?.message || errors?.password?.message)}
        text='Giriş'
        onClick={handleSubmit}
        color='blue500'
        variant='outlined'
        icon={Icons.chevron_right}
      />
    </div>
  );
};

export default LoginView;
