import type { ControlledFormValue } from 'jamyth-web-util';
import React from 'react';
import { NullableInput } from './NullableInput';

interface Props extends ControlledFormValue<number | null> {}

export const NullableNumberInput = React.memo(({ value, onChange }: Props) => {
    const [tmp, setTmp] = React.useState<string | null>(value ? `${value}` : null);

    const onBlur = () => {
        if (tmp === null) {
            onChange(null);
            return;
        }
        const _value = parseInt(tmp, 10);
        if (Number.isNaN(_value) || _value < 0) {
            setTmp(value ? `${value}` : null);
            return;
        }
        onChange(_value);
        setTmp(String(_value));
    };

    return <NullableInput value={tmp} onChange={setTmp} onBlur={onBlur} />;
});
