import React from 'react';
import './NavTitleList.css';
import ReactDOM from 'react-dom';
import NavItemGroup from './DestinationGroup';

export default class NavList extends React.Component {
    render() {

        const navTitles = ['机构设置', '人才培养', '学科建设', '人才引进', '党的建设', '学生工作'];
        const NavGroup=[['Baidu','http://www.baidu.com'],['SoHu','www.sohu.com']];
        const navTitleList = navTitles.map((navTitle) =>
            <li>{navTitle}</li>
        );
        
        return (
            <div>
            <nav>
                <ul>
                    {navTitleList}
                </ul>
            </nav>
            <NavItemGroup destination={NavGroup}></NavItemGroup>
            </div>
        );
    }
}