import { startApp, async } from 'coil-react';

const MainComponent = async(() => import('module/main'), 'MainComponent');

startApp({
    MainComponent,
    entryElement: document.getElementById('app'),
    useError: () => () => {},
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.info('SW registered');
            })
            .catch((registrationError) => {
                console.info('SW registration failed: ', registrationError);
            });
    });
}
