import tshirtFront from '../assets/images/create-design-pages/t-shirt-front-print.svg';
import tshirtBack from '../assets/images/create-design-pages/t-shirt-back-print.svg';
import bagFront from '../assets/images/create-design-pages/bag-print.svg';
import cupFront from '../assets/images/create-design-pages/cup-front-print.svg';
import cupBottom from '../assets/images/create-design-pages/cup-bottom-print.svg';

export const PRINT_AREA_MAP = {
  tshirt: [
    { name: 'frontprint', icon: tshirtFront },
    { name: 'backprint', icon: tshirtBack },
  ],
  bags: [
    { name: 'frontprint', icon: bagFront },
  ],
  cups: [
    { name: 'leftprint', icon: cupFront },
    { name: 'rightprint', icon: cupBottom },
  ],
};
