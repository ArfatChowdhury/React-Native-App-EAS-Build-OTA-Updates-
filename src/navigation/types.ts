import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Home: undefined;
    BuildInfo: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type BuildInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BuildInfo'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type BuildInfoScreenRouteProp = RouteProp<RootStackParamList, 'BuildInfo'>;
