import React from 'react';
import { Alert as AntAlert} from 'antd';

const Alert = (message, type = 'info') => <AntAlert message={message} type={type} closable />

export default Alert
