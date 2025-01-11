import { LoginProps } from './login.types';
import './login.scss';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { Colors } from '@/theme/colors';
import Text from '@/components/text/Text';
import { useState } from 'react';

const LoginView = ({ value }: LoginProps): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log(value);
  return (
    <div className='login-form'>
      <Text size='lg'>Giriş Yap</Text>
      <div
        style={{
          width: '100%',
        }}
      >
        <Input
          type='text'
          label='E-posta'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Text color={Colors.red600} size='xs'>
          Lütfen geçerli bir e-posta giriniz...
        </Text>
      </div>
      <div
        style={{
          width: '100%',
        }}
      >
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          label='Şifre'
        />
        <Text color={Colors.red600} size='xs'>
          Lütfen geçerli bir şifre giriniz...
        </Text>
      </div>
      <Button
        text='Giriş'
        onClick={() => {}}
        color={'blue500'}
        variant='outlined'
      />
    </div>
  );
};

export default LoginView;
