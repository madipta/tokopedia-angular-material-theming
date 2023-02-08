import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ISideNavMenu {
  type: 'Divider' | 'Folder' | 'Item';
  active?: boolean;
  caption?: string;
  icon?: IconProp;
  link?: string;
  children?: ISideNavMenu[];
}
