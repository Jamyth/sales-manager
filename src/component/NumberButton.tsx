import React from 'react';
import { ButtonGroup, IconButton, Button } from '@chakra-ui/react';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';

export interface Props {
    id: string;
    value: number;
    onChange: (value: number, id: string) => void;
}

export const NumberButton = React.memo(({ id, value, onChange }: Props) => {
    return (
        <ButtonGroup isAttached>
            <IconButton
                aria-label="Minus"
                disabled={value === 0}
                onClick={() => onChange(value - 1, id)}
                icon={<AiOutlineMinus />}
            />
            <Button disabled w={8} px={4} fontSize="lg">
                {value}
            </Button>
            <IconButton aria-label="Add" onClick={() => onChange(value + 1, id)} icon={<IoIosAdd />} />
        </ButtonGroup>
    );
});
