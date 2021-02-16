import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import "../assets/styles/Subject.less"
import axios from 'axios'
import { connect } from 'react-redux';
class Subject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject_data: []
        }
    }

    componentDidMount() {
        axios.get('./server/subject.json').then((res) => {
            if (res.status == 200) {
                // this.setState({
                //     subject_data: res.data
                // })
                this.props.init_subject_data(res.data);
            }
        })
    }

    render() {
        return (
            <div className="subject">
                {/* 第一行 */}
                <Flex justify="center">
                    {
                        this.props.subject_data.map((v, k) => {
                            if (k < 4) {
                                return (
                                    <Flex.Item key={v.id}>
                                        <a href={`#/list/${v.id}`}>
                                            <i style={{ backgroundPositionX: `${k * -50}px` }}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                        })
                    }
                    {/* <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: '0px' }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: '-50px' }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: -100 }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: -150 }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item> */}
                </Flex>


                {/* 第二行 */}
                <Flex justify="center">
                    {
                        this.props.subject_data.map((v, k) => {
                            if (k >= 4) {
                                return (
                                    <Flex.Item key={v.id}>
                                        <a href={`#/list/${v.id}`}>
                                            <i style={{ backgroundPositionX: `${k * -50}px` }}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                        })
                    }
                    {/* <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: -200 }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: -250 }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{ backgroundPositionX: -300 }}></i>
                            <p>JavaScript</p>
                        </a>
                    </Flex.Item>*/}
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        subject_data: state.subject_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init_subject_data(res_data){
            let action = {
                type:'init_subject_data',
                value:res_data
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject);