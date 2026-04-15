import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  'data-testid'?: string
}

export default function Reveal({ children, className = '', delay = 0, id, 'data-testid': testId }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div className={className} id={id} data-testid={testId}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      id={id}
      data-testid={testId}
      initial={{ opacity: 1, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
