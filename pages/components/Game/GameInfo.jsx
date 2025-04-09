import clsx from 'clsx'
import React from 'react'
import { Profile } from '../Profile'
import {CrossIcone} from './icons/Cross-Icone'

export function GameInfo({className}) {
  return ( 
    <div className={clsx(className, 'px-8 py-4 bg-white rounded-2xl shadow-lg')}> 
    <div>
        <CrossIcone/>
        <Profile className='text-teal-600'/>
    </div>
    </div>
  )
}
