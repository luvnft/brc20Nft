// import {useAnimateSwitchStyle} from './useAnimateSwitchStyle';
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom';
import './index.css'
export const AnimateSwitch=(props:any)=>{

  // const classes=useAnimateSwitchStyle();
  const { children } = props
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            in={false}
            key={location.pathname}
            classNames={props.type || 'fade'}
            timeout={props.duration || 450}
          >

            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}
