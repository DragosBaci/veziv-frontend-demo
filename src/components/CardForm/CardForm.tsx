import styled from 'styled-components';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useValidateUser from '../../hooks/useValidateUser';
import requestUrls from '../../backend/requestUrls';
import usePostCustomFetch from '../../hooks/usePostCustomFetch';

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 20px;
    width: 40vw;
    @media (max-width: 767px) {
        width: 90vw;
    }
    @media (max-width: 1024px) {
        width: 70vw;
    }
`;

const PWrapper = styled.p`
    color: #bf1650;
    text-align: center;
    grid-column: span 2;
`;

const SubmitButton = styled.input`
    position: relative;
    background: #ec5990;
    text-transform: uppercase;
    border: none;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;

    &:hover {
        background: #bf1650;
        color: white;
    }

    &:active {
        transition: 0.3s all;
        top: 2px;
    }
`;

const FormInput = styled.input`
    display: grid;
    padding: 10px;
`;

const FormSelect = styled.select`
    display: grid;
    padding: 10px;
    width: 100%;
`;
type DynamicFormProps = {
    formData: any;
};

const CardForm: React.FC<DynamicFormProps> = ({ formData }) => {
    const { token } = useValidateUser();
    const { fetcher: sendPayload } = usePostCustomFetch<any, any>(requestUrls.card);

    const { register, handleSubmit } = useForm();

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    if (!formData) {
        return null;
    }
    console.log(formData);
    return (
        <BodyWrapper>
            <FormWrapper
                onSubmit={handleSubmit(async formData => {
                    const formDataWithImage = new FormData();
                    Object.entries(formData).forEach(([key, value]) => {
                        formDataWithImage.append(key, value);
                    });

                    if (file) {
                        formDataWithImage.append('image', file);
                    }
                    sendPayload(formDataWithImage, token, true);
                })}
            >
                {formData.map((field: any, index: any) => {
                    switch (field.type) {
                        case 'text':
                            return <FormInput key={index} {...register(field.name, { required: field.required })} placeholder={field.placeholder} />;
                        case 'select':
                            return (
                                <FormSelect key={index} {...register(field.name, { required: field.required })}>
                                    <option value="">Hidden</option>
                                    {field.options.map((option: any, optionIndex: any) => (
                                        <option key={optionIndex} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </FormSelect>
                            );
                        case 'image':
                            return (
                                <div key={index}>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <input type="file" id={'image'} accept="image/*" onChange={handleFileChange} />
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
                <PWrapper></PWrapper>
                <SubmitButton type="submit" />
            </FormWrapper>
        </BodyWrapper>
    );
};

export default CardForm;
