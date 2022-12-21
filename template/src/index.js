import React, {Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './stores';
import App from './App';
import ErrorBoundary from './components/global/ErrorBoundary'
import {ConfigProvider, Space, Spin} from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css'
import './assets/css/common.css'
import reportWebVitals from './reportWebVitals';

dayjs.locale('zh-cn');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <ErrorBoundary>
                <Suspense fallback={
                    <Space size="middle">
                        <Spin tip="Loading" size="large"/>
                    </Space>
                }>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <App/>
                        </PersistGate>
                    </Provider>
                </Suspense>
            </ErrorBoundary>
        </ConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
