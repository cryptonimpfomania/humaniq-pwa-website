import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Partners')
import Meta from './meta'
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import A_Btn from 'A_Btn'
import M_Dropdown from 'M_Dropdown'
import M_Tooltip from 'M_Tooltip'
import A_Link from 'A_Link'
import O_TextUsHere from 'O_TextUsHere'

class SE_Partners extends Component {

  state = {
    filter: 'All',
  }

  nodes = []

  componentDidMount() {
    window.addEventListener('resize', this.forceUpdate, false);
    this.forceUpdate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.forceUpdate, false);
  }

  getPartners(entities, filter) {
    let filtered
    if (filter == 'All') {
      filtered = entities
    } else {
      filtered = entities.filter(entity => entity.type === filter)
    }

    let _renderedPartners = filtered.map((partner, i) => {
      let tooltipPlace;
      if (
        this.nodes[0]
        && this.nodes[i + 1]
        && (this.nodes[0].offsetLeft + this.nodes[i + 1].offsetLeft > 200)
      ) {
        tooltipPlace = 'left'
      } else {
        tooltipPlace = 'right'
      }

      return (
        <div
          className={cn('partner-list-item')}
          key={partner.title}
          ref={ node => this.nodes[i + 1] = node}
        >
          <A_Image
            src={partner.logoLink2x}
            alt={partner.title}
          />
          <span className={cn('tooltip', {type: tooltipPlace})}>
            <M_Tooltip type={tooltipPlace}>
              <A_H type='tooltip'>{partner.title}</A_H>
              <span onClick={() => this.setState({filter: partner.type})} style={{cursor: 'pointer'}}>
                <A_H type='tooltip-sub'>{partner.type}</A_H>
              </span>
              {partner.type}{' '}
              {partner.description}<br />
              <A_Link to={partner.link} external type='section-link-clean'>More info » </A_Link>
            </M_Tooltip>
          </span>
          <span className={cn('link')}>
            <A_Link to={partner.link} external type="block" >{' '}</A_Link>
          </span>
        </div>
      )
    })

    for (let i = 0; i < 4; i++) {
      _renderedPartners.push(
        <div
          className={cn('partner-list-item-empty')}
          key={'key_' + i}
        />
      )
    }
    return _renderedPartners
  }

  render() {
    const {types, entities} = this.props
    const options = ['All', ...types]
    const {filter} = this.state
    return (
      <div>
        <Meta />
        <A_Container type="section">
          <O_Hero img={{src: "/img/illustrations/group-6.svg", alt: "parners"}}>
            <A_H type="hero">Join our Community</A_H>
            <A_P type="hero">Humaniq is proud of its wide partnership network which includes everybody from fintech
              companies and Blockchain communities to publishing media and app developers.</A_P>
          </O_Hero>
          <A_H type="section">Ever growing network</A_H>
          <A_P type="third">We believe in the services that Humaniq partners provide, to support us in raising standards
            and making excellence a habit. Our partners create and deliver cutting-edge technologies and Blockchain
            solutions vital to achieving financial inclusion for everybody. They include independent consultants who
            help us to implement new solutions, laboratories who work with us to test products, Blockchain communities,
            and many more.</A_P>
          <div className={cn('form')}>
            <div className={cn('form-select')}>
              <M_Dropdown
                selected={filter}
                options={options}
                onChange={filter => this.setState({filter})}
              />
            </div>
            <A_Btn
              type="material-r-link"
              to='/form/join'
            >Join Humaniq Network</A_Btn>
          </div>
          <div className={cn('partner-list-wrapper')}>
            <div
              className={cn('partner-list')}
              ref={ node => this.nodes[0] = node}
            >
              {this.getPartners(entities, filter)}
            </div>
          </div>
        </A_Container>
        <A_Container type="equal">

          <O_TextUsHere
            {...{
              title: 'Join our Community',
              text: 'Join Humaniq\'s ever growing network. Get in touch if your organization would like to join the network.',
              link: {
                linkText: 'Leave your information',
                url: 'mailto:info@humaniq.com'
              }
            }}
          />
        </A_Container>
      </div>
    )
  }
}

SE_Partners.propTypes = {
  entities: T.array.isRequired,
  types: T.array.isRequired
};

export default SE_Partners
