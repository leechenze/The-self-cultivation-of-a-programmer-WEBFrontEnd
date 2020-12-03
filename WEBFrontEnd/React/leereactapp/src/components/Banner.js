import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import "../assets/styles/Banner.css"

import BannerImg1 from '../assets/images/banner1.png'
import BannerImg2 from '../assets/images/banner2.png'
import BannerImg3 from '../assets/images/banner3.png'

export default class Banner extends React.Component {
    state = {
        data: [BannerImg1, BannerImg2, BannerImg3],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [BannerImg1, BannerImg2, BannerImg3],
            });
        }, 100);
    }
    render() {
        return (
            <Carousel
                // autoplay的写法  等同于 autoplay={true};
                autoplay
                infinite
            >
                {this.state.data.map(val => (
                    <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}