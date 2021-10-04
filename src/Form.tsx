import {
  Box,
  Button, Form, FormField, TextInput,
} from 'grommet';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useStore } from './store';

type FieldsType = {
  name: string;
  surname: string;
};

export const TestForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm<FieldsType>();
  const setName = useStore(state => state.setNewName);
  const setSurname = useStore(state => state.setNewSurname);

  const onSubmit = (data: FieldsType) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setName(data.name);
    setSurname(data.surname);
    reset();
  };

  const StyledForm = styled.div`
    border: 2px solid green;
    border-radius: 15px;
    padding: 20px;
  `;

  return (
    <StyledForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="Name" for="name-id">
          <TextInput {...register('name')} id="name-id" />
        </FormField>

        <FormField label="Surname" for="surname-id">
          <TextInput {...register('surname')} id="surname-id" />
        </FormField>

        <Box>
          <Button type="submit" label="Submit" />
        </Box>

      </Form>
    </StyledForm>

  );
};
