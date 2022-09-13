import React from 'react';
import { Form, Button, Panel, IconButton, Stack, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
import GithubIcon from '@rsuite/icons/legacy/Github';
import FacebookIcon from '@rsuite/icons/legacy/Facebook';
import GoogleIcon from '@rsuite/icons/legacy/Google';
import WechatIcon from '@rsuite/icons/legacy/Wechat';
import Brand from '@/components/Brand';

const SignUp = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh',
        
      }}

    >
      <Brand style={{ marginBottom: 10 }} />

      <Panel className='shadow-5-strong' style={{ background: '#444', width: 400, }} header={<h3>Login</h3>}>
        <p style={{ marginBottom: 10 }}>
          <span className="text-muted">Novo aqui? </span>{' '}
          <Link to="/sign-up"> Crie uma conta!</Link>
        </p>

        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Usuário ou e-mail</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <span>Senha</span>
              <a style={{ float: 'right' }}>Esqueceu a senha?</a>
            </Form.ControlLabel>
            <Form.Control name="name" type="password" />
          </Form.Group>
          <Form.Group>
            <Stack spacing={6} justifyContent="center" divider={<Divider vertical />}> 
              <Stack spacing={6}>
                <IconButton icon={<WechatIcon />} appearance="subtle" />
                <IconButton icon={<GithubIcon />} appearance="subtle" />
                <IconButton icon={<FacebookIcon />} appearance="subtle" />
                <IconButton icon={<GoogleIcon />} appearance="subtle" />
              </Stack>
              <Button appearance="primary"  href="/dashboard">Login</Button>
            </Stack>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
};

export default SignUp;
