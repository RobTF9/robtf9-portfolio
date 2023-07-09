import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AnimationContext {
  active: boolean
}

const animationContext = createContext<AnimationContext>({
  active: true,
})

export const useAnimationContext = (): AnimationContext =>
  useContext(animationContext)

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('animations') === '0') {
      setActive(false)
    } else if (active) {
      setTimeout(() => setActive(false), 6500)
    } else if (!active) {
      localStorage.setItem('animations', '0')
    }
  }, [active])

  return (
    <animationContext.Provider value={{ active }}>
      {children}
    </animationContext.Provider>
  )
}
