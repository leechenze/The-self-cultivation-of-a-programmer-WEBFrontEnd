import React, { Component } from 'react'
import Header from '../components/Header'
import ImgPackage from '../components/ImgPackage'
import '../assets/styles/DetailPage.less'

export default class DetailPage extends Component {
    render() {
        return (
            <div className="detail-page">
                {/* 详情页头部 */}
                <div className="detail-header">
                    <Header isDetail />
                </div>
                {/* 详情文章 */}
                <article>
                    <h1>生活是首歌,人生爱不同</h1>
                    <p className="clear">
                        <span className="fl">
                            作者: <span>李礼卿</span>
                        </span>
                        <span className="fr">
                            2020-12-10
                        </span>
                    </p>
                    <div className="image-box">
                        <ImgPackage src="20191025091907842.gif" />
                    </div>
                    <div className="article-box">
                        <p>　　生活是首歌，人生爱不同，  默契不语，却心灵相通，春去秋来，却真情依然，没在身边，却在心里，走进的是心灵，没有牵手，却有挂牵，拥有的是感动，心的贴近，温暖着飘零，情的真诚，呵护着生命，阳光暖在身上，真情暖在心上春风吹在脸上，幸福印在心中，陪伴，无怨无悔，无论何时何地，以心作陪，付出，全心全意，无论天涯海角，以情相暖，了解生活中的负累，无助时，赋予精神的支撑，懂得伪装后的坚强，流泪时，给予最真的心疼，人间最温暖，莫过于有人懂有人疼，<a href="//www.haojuzi.net/wenzhang/aiqing/">爱情</a>最真实，有人恨有人爱有人讲，一句想你，会倍感幸福，痛苦，因一个人而生，人生也不过就是如此，且行且珍惜。</p>
                    </div>
                    <p className="clear">
                        <span className="fl">
                            <i className="iconfont icon-yanjing"></i>
                            <span><span>345</span>人观看</span>
                        </span>
                        <span className="fr">
                            <i className="iconfont icon-report"></i>
                            <span>我要举报</span>
                        </span>
                    </p>
                </article>
            </div>
        )
    }
}
