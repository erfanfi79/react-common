import TorobHeader from './components/TorobHeader/react-bootstrap_compatible';
import axios from './components/axios';
import ClickableText from './components/clickableText';
import Divider from './components/divider';
import { TitleComponent, withTitle } from './components/dynamicTitle';
import MainNavigation from './components/mainNavigation';
import SecondaryNavigation from './components/secondaryNavigation';
import PrivateRoute from './components/privateRoute';
import SearchFilters from './components/searchFilters';
import SearchInfo from './components/searchInfo';
import Toast from './components/toast';
import FullscreenDialog from './components/fullscreenDialog';
import { colors, bgStyles, btnStyles } from './components/torobStyles';
import { StaticCategorySelector } from './components/categorySelector';
import { StaticShopSelector } from './components/shopSelector';
import ImageHolder from './components/imageHolder';
import { useNotif, NotificationProvider } from './hooks/useNotif';
import useTorobAPI from './hooks/useTorobAPI';
import { AuthProvider, useAuth } from './providers/auth';
import TorobPagination from './components/pagination';

const DynamicTitle = { TitleComponent, withTitle };
const hooks = { useNotif, useTorobAPI, useAuth };
const Providers = { AuthProvider, NotificationProvider };

export {
  TorobHeader,
  axios,
  ClickableText,
  Divider,
  DynamicTitle,
  MainNavigation,
  SecondaryNavigation,
  PrivateRoute,
  SearchFilters,
  SearchInfo,
  Toast,
  FullscreenDialog,
  colors,
  bgStyles,
  btnStyles,
  StaticCategorySelector,
  StaticShopSelector,
  ImageHolder,
  Providers,
  hooks,
  TorobPagination,
};