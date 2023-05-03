import React from 'react';
import {Breadcrumb, theme} from "antd";
import { Content } from 'antd/es/layout/layout'
const ContentCustom = (props: any) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Artur</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                Artur is an experienced software engineer with a passion for developing innovative and high-quality software solutions.
                <br />He has a strong background in software development, including experience in designing, coding, testing, and maintaining software applications.
              <br />  Artur is highly skilled in multiple programming languages and has a proven track record of delivering complex projects on time and within budget
            </div>
        </Content>
    );
};

export default ContentCustom;