import React from 'react';
import {storiesOf} from '@storybook/react-native';
import { ForgotPass } from '../../../src/components';
import { Alert } from 'react-native';

storiesOf('ForgotPass', module).add('default', () => <ForgotPass title={'Press me'} onPress={() => Alert.alert('Pressed')} />)