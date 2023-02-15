import React, {Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './stores';
import App from './App';
import ErrorBoundary from './components/global/ErrorBoundary'
import {ConfigProvider} from 'antd';
import Loading from './components/global/Loading'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css'
import './assets/css/common.css'
import reportWebVitals from './reportWebVitals';

dayjs.locale('zh-cn');

require("./mock")

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConfigProvider locale={zhCN}>
                    <ErrorBoundary>
                        <Suspense fallback={Loading()}>
                            <App/>
                        </Suspense>
                    </ErrorBoundary>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
