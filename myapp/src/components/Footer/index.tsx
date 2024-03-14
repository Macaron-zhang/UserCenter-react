import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {MY_GITHUB_LINK} from "@/constants";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={'Day Day Up 公司'}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Day Day Up',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: MY_GITHUB_LINK,
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '用户中心',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
