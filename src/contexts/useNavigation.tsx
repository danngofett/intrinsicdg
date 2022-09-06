import * as React from 'react'

interface Option {
  value: boolean
  id: string
  name: string
}

type Action =
  | { type: 'open'; value: boolean; id: string }
  | { type: 'close'; value: boolean; id: string }
  | { type: 'toggle' }
type Dispatch = (action: Action) => void
type State = { isOpen: Option[] }
type NavigationProviderProps = { children: React.ReactNode }

const NavigationContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function navigationReducer(state: State, action: Action) {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
      }
    case 'close':
      return {
        isOpen: false,
      }
    case 'toggle':
      return {
        isOpen: !state.isOpen,
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function NavigationProvider({ children }: NavigationProviderProps) {
  const [state, dispatch] = React.useReducer(navigationReducer, {
    isOpen: false,
  })

  const value = { state, dispatch }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

function useNavigation() {
  const context = React.useContext(NavigationContext)

  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }

  return context
}

export { NavigationProvider, useNavigation }
