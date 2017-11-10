import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName, convert} from 'utils'
const cn = cssClassName('SE_About')
import Meta from './meta'
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import Timeline from './Timeline'
import M_Tooltip from 'M_Tooltip'


class SE_About extends Component {

  state = {
    filter: 'All',
  }

  nodes = {}

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   window.addEventListener('resize', this.forceUpdate);
  //   this.forceUpdate()
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   window.removeEventListener('resize', this.forceUpdate);
  // }
  //
  // componentDidUpdate() {
  //   const defaultNode = this.default
  //   if(!defaultNode || !defaultNode.getBoundingClientRect().right){
  //     console.log(!defaultNode, !defaultNode.getBoundingClientRect().right, 'не работает', defaultNode.offsetLeft)
  //   } else{
  //     console.log(!defaultNode, !defaultNode.getBoundingClientRect().right, 'работает', defaultNode.offsetLeft)
  //   }
  // }

  getFounders(founders){

    const renderedFounders = founders.map(({name, position, bio, imgSrc}, i, arr) => {
      const tooltipPlace = i === arr.length -1 ? 'left' : 'right'
      return (
        <div className={cn('founder')} key={'key_' + i}>
          <A_Image
            src={imgSrc}
            alt={name}
            rounded
          />
          <span className={cn('tooltip', {type: tooltipPlace})}>
            <M_Tooltip type={tooltipPlace} size="wide">
              <A_H type='tooltip'>{name}</A_H>
              <A_H type='tooltip-sub'>{position}</A_H>
              <span dangerouslySetInnerHTML={{__html: bio}}/>
            </M_Tooltip>
          </span>
        </div>
      )
    })
    return(
      <ul className={cn('founders')}>
        {renderedFounders}
      </ul>
    )
  }

  getTeam(entities) {

    let _renderedTeam = entities.map(({name, bio, imgSrc, position}, i) => {
      const kebabName = convert.toCleanKebab(name)
      // let tooltipPlace;
      // if(this.nodes[kebabName]){
      //   console.log(
      //     kebabName,
      //     this.nodes[kebabName].offsetLeft,
      //     this.nodes[kebabName],
      //     // this.nodes.default.getBoundingClientRect().right,
      //     // this.nodes[kebabName].getBoundingClientRect().right,
      //     // this.nodes.default.getBoundingClientRect().right - this.nodes[kebabName].getBoundingClientRect().right < 200
      //   )
      // }
      //
      // if (
      //   this.default
      //   && this.nodes[kebabName]
      //   && (this.default.getBoundingClientRect().right - this.nodes[kebabName].getBoundingClientRect().right < 200)
      // ) {
      //   tooltipPlace = 'left'
      // } else {
      //   tooltipPlace = 'right'
      // }

      const tooltipPlace = (i+1) % 5 === 0 ? 'left' : 'right'

      return (
        <div
          className={cn('team-member')}
          key={kebabName}
          ref={ node => this.nodes[kebabName] = node}
        >
          <A_Image
            src={imgSrc}
            alt={name}
            rounded
          />
          <span className={cn('tooltip', {type: tooltipPlace})}>
            <M_Tooltip type={tooltipPlace} size="wide">
              <A_H type='tooltip'>{name}</A_H>
              {position &&
                <A_H type='tooltip-sub'>{position}</A_H>
              }
              <span dangerouslySetInnerHTML={{__html: bio}}/>
            </M_Tooltip>
          </span>
        </div>
      )
    })

    for (let i = 0; i < 7; i++) {
      _renderedTeam.push(
        <div
          className={cn('team-member-empty')}
          key={'key_' + i}
        />
      )
    }
    return (
      <div className={cn('team-list')} >
        {_renderedTeam}
      </div>
    )
  }

  render() {
    const {advisers, team, timeLineData} = this.props
    // const renderedFounders = this.getFounders(founders)
    const renderedAdvisers = this.getTeam(advisers)
    const renderedTeam = this.getTeam(team)

    return (
      <div>
        <Meta />
        <A_Container type="equal">
          <O_Hero img={{src: "/img/illustrations/about-us.svg", alt: "parners"}}>
            <A_H type="hero">About Humaniq</A_H>
            <A_P type="hero">A little snapshot about the people that live Humaniq and run Humaniq.</A_P>
          </O_Hero>
          <A_H type="section">Our Mission</A_H>
          <A_P type="third">Today, two billion people around the world do not have access to banking.  Humaniq aims to increase financial inclusion worldwide by providing new financial services to the unbanked based on Blockchain technology and biometric identification systems. With this new mobile digital economy, we will help people who are excluded from the financial system break free from poverty and improve their lives, and emerging economies shift into the cryptoeconomy. </A_P>
        </A_Container>
        {/*<A_Container type="equal">*/}
          {/*<A_H type="section-c">Humaniq Founders</A_H>*/}
          {/*{renderedFounders}*/}
        {/*</A_Container>*/}
        <A_Container type="equal">

          <A_H type="section" >Humaniq Team</A_H>
          <div ref={ node => this.default = node} style={{width: '100%', height: 1}}>{' '}</div>
          <div>
            {renderedTeam}
          </div>
        </A_Container>
        <A_Container type="equal">
          <A_H type="section" >Humaniq Advisers</A_H>
          <div>
            {renderedAdvisers}
          </div>
        </A_Container>
        <Timeline timeLineData={timeLineData} />
      </div>
    )
  }
}

SE_About.propTypes = {
  founders: T.array.isRequired,
  advisers: T.array.isRequired,
  team: T.array.isRequired
};

export default SE_About