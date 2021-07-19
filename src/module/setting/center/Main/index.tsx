import React from 'react';
import { Page } from 'component/Page';
import { StackHeader } from 'component/StackHeader';
import { Section } from 'component/Section';
import { IoIosBriefcase } from 'react-icons/io';
import { useSettingCenterAction } from 'module/setting/center';

export const Main = React.memo(() => {
    const header = <StackHeader title="設定" />;
    const { toMenuSetting } = useSettingCenterAction();

    return (
        <Page header={header} py={4}>
            <Section>
                <Section.Row icon={IoIosBriefcase} label="產品目錄" linkOrAction={toMenuSetting} />
            </Section>
        </Page>
    );
});
