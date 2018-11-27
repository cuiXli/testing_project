
import React from 'react';
import moment from 'moment';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LocaleProvider from 'antd/lib/locale-provider'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'
import LayOut from '../containers/layout'

moment.locale('zh-cn');
const Routes = () => (<div>12122</div>)
;

export default Routes;