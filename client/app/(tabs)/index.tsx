import Header from '@/components/Header'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
export default class Home extends Component {
  render() {
    return (
     <SafeAreaView className="flex-1" edges={['top']}>
      <Header title="Forever" showMenu showCart showLogo />
     </SafeAreaView>
    )   
  }
}