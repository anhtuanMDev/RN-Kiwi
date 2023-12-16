import { View, Text } from 'react-native'
import React from 'react'
import SignIn from './src/components/login/SignIn'
import { Provider } from 'react-redux'
import { store } from './src//helper/state/store'


const App = () => {
  return (
    <Provider store={store}>
      <SignIn/>
    </Provider>
  )
}

export default App