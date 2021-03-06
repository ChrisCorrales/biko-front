import { Button, Col, Form, Input, Row } from 'antd';
import Field from 'components/shared/Field';
import React from 'react';
import { stepService } from '../stepsServices';
import { Container } from './styles';

interface IProps {
  display: boolean;
}

const AcessStep: React.FC<IProps> = ({ display }) => {
  return (
    <Container style={display ? {} : { display: 'none' }}>
      <div>
        <Field
          name="user.email"
          formItemProps={{ label: 'E-mail' }}
          inputProps={{
            type: 'text',
            placeholder: 'Digite seu e-mail.',
          }}
        />
        <Field
          type="password"
          name="user.password"
          formItemProps={{ label: 'Senha' }}
          inputProps={{
            type: 'text',
            placeholder: 'Senha no com no minímo 6 digítos',
          }}
        />
        <Field
          type="password"
          name="user.password2"
          formItemProps={{ label: 'Confirme a senha' }}
          inputProps={{
            type: 'text',
            placeholder: 'Digite a senha novamente',
          }}
        />
      </div>

      <Row gutter={8} justify="space-between">
        <Col span={10}>
          <Button block onClick={stepService.prev}>
            Voltar
          </Button>
        </Col>
        <Col span={14} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" ghost block htmlType="submit">
            Finalizar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AcessStep;
