import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  // styled-components 의 DefaultTheme을 프로젝트의 Thema 인터페이스로 확장
  export interface DefaultTheme extends Theme {}
}
