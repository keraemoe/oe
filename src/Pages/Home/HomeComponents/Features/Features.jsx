import React from 'react';
import s from './Features.module.scss'
import banner2 from '../../../../Assets/banner2.png'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text1 = "fdsfdsfdsfsdfdsfsdfsdf"
const text2 = "1111111111111111111111"
const text3 = "######################"

const Features = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div id='container'>
                <div id='features' className={s.features}>
                    <div className={s.first}>
                        <img src={banner2} alt="" />
                    </div>
                    <div className={s.second}>
                        <h1>Your pathway <br /> to Future <br /> Investment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac <br /> etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, <br /> consectetur </p>
                        <Collapse defaultActiveKey={['1']} onChange={onChange}>
                            <Panel header="What is InvestInUs?" key="1">
                                <p>{text1}</p>
                            </Panel>
                            <Panel header="How safe is InvestInUs?" key="2">
                                <p>{text2}</p>
                            </Panel>
                            <Panel header="What do I gain from using InvestInUs?" key="3">
                                <p>{text3}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;