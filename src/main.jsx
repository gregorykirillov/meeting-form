import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/components'

import { ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider appearance="light">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
)
