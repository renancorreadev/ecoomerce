import { createContext, FC, useContext, useState } from 'react'
export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
}
export interface StateValues {
  isSidebarOpen: boolean
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
}

const initialState = { isSidebarOpen: false }

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
})

export const UIProvider: FC = ({ children }) => {
  const openSidebar = () => alert('Opening')
  const closeSidebar = () => alert('Closing')

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false,
  }
  return (
    <>
      <UIContext.Provider value={value}>{children}</UIContext.Provider>
    </>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}
