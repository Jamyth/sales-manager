import React from 'react';
import { Page } from 'component/Page';
import { StackHeader } from 'component/StackHeader';
import { Footer } from './Footer';
import { List } from './List';
import { EditingModal } from './EditingModal';

export const Main = React.memo(() => {
    return (
        <Page header={<StackHeader title="產品目錄" />} footer={<Footer />} pt={4}>
            <List />
            <EditingModal />
        </Page>
    );
});
