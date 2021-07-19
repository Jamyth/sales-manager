import React from 'react';
import { Input, useColorModeValue } from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';
import type { ControlledFormValue } from 'jamyth-web-util';

interface Props extends ControlledFormValue<string | null>, Omit<InputProps, 'value' | 'onChange'> {}

export const NullableInput = React.memo(({ value, onChange, ...props }: Props) => {
    const backgroundColor = useColorModeValue('white', 'gray.700');

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        onChange(value.trim() ? value : null);
    };

    return <Input {...props} backgroundColor={backgroundColor} value={value || ''} onChange={onTextChange} />;
});
