import { CMSImage } from '~/types/Models/CMSImage';
import { CMSModel } from '~/types/Models/CMSModel';
import { CMSSeo } from '~/types/Models/CMSSeo';

export interface CMSPayment extends CMSModel {
  title: string;
  description: string;
  seo: CMSSeo;
  image: CMSImage;
}
